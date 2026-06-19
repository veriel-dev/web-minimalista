import { useCallback, useEffect, useRef, useState } from 'react';

const STORAGE_KEY = 'persona:sfx-muted';

type WebkitWindow = Window & {
  webkitAudioContext?: typeof AudioContext;
};

const readMuted = (): boolean => {
  if (typeof window === 'undefined') return true;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === null ? true : stored === '1';
};

const p5Noise = (
  ctx: AudioContext,
  t: number,
  dur: number,
  f0: number,
  f1: number,
  vol: number,
): void => {
  const buf = ctx.createBuffer(1, Math.ceil(ctx.sampleRate * dur), ctx.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < data.length; i++) {
    data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / data.length, 2);
  }

  const src = ctx.createBufferSource();
  src.buffer = buf;

  const bp = ctx.createBiquadFilter();
  bp.type = 'bandpass';
  bp.Q.value = 0.9;
  bp.frequency.setValueAtTime(f0, t);
  bp.frequency.exponentialRampToValueAtTime(f1, t + dur);

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(vol, t);
  gain.gain.exponentialRampToValueAtTime(0.0008, t + dur);

  src.connect(bp).connect(gain).connect(ctx.destination);
  src.start(t);
};

const p5Blip = (
  ctx: AudioContext,
  t: number,
  f0: number,
  f1: number,
  vol: number,
  type: OscillatorType,
): void => {
  const osc = ctx.createOscillator();
  osc.type = type;
  osc.frequency.setValueAtTime(f0, t);
  osc.frequency.exponentialRampToValueAtTime(f1, t + 0.1);

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0, t);
  gain.gain.linearRampToValueAtTime(vol, t + 0.005);
  gain.gain.exponentialRampToValueAtTime(0.0008, t + 0.14);

  osc.connect(gain).connect(ctx.destination);
  osc.start(t);
  osc.stop(t + 0.16);
};

export interface UseSfxApi {
  muted: boolean;
  toggleMute: () => void;
  tick: () => void;
  confirm: () => void;
}

export const useSfx = (): UseSfxApi => {
  const [muted, setMuted] = useState<boolean>(readMuted);
  const ctxRef = useRef<AudioContext | null>(null);
  const mutedRef = useRef(muted);

  useEffect(() => {
    mutedRef.current = muted;
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, muted ? '1' : '0');
    }
  }, [muted]);

  useEffect(() => {
    return () => {
      ctxRef.current?.close();
      ctxRef.current = null;
    };
  }, []);

  const ensureCtx = useCallback((): AudioContext | null => {
    if (mutedRef.current) return null;
    if (typeof window === 'undefined') return null;

    if (!ctxRef.current) {
      const Ctor = window.AudioContext ?? (window as WebkitWindow).webkitAudioContext;
      if (!Ctor) return null;
      try {
        ctxRef.current = new Ctor();
      } catch {
        return null;
      }
    }

    if (ctxRef.current.state === 'suspended') {
      void ctxRef.current.resume();
    }
    return ctxRef.current;
  }, []);

  const tick = useCallback(() => {
    const ctx = ensureCtx();
    if (!ctx) return;
    p5Blip(ctx, ctx.currentTime, 1500, 950, 0.045, 'square');
  }, [ensureCtx]);

  const confirm = useCallback(() => {
    const ctx = ensureCtx();
    if (!ctx) return;
    const t = ctx.currentTime;
    p5Noise(ctx, t, 0.42, 1400, 5200, 0.16);
    p5Blip(ctx, t, 920, 440, 0.11, 'square');
    p5Blip(ctx, t + 0.06, 1320, 660, 0.09, 'square');
  }, [ensureCtx]);

  const toggleMute = useCallback(() => {
    setMuted(m => !m);
  }, []);

  return { muted, toggleMute, tick, confirm };
};
