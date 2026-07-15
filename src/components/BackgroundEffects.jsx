import React, { useEffect, useRef, Fragment } from 'react';
import { useTheme, PREVIEW_MODES, timeOfDay } from '../ThemeContext';

// ─── Helpers ─────────────────────────────────────────────────────────────────
const rand = (min, max) => Math.random() * (max - min) + min;
const getHour = () => new Date().getHours();

// ─── Star data (generated once) ──────────────────────────────────────────────
const STARS = Array.from({ length: 220 }, (_, i) => ({
  x: rand(0, 1),        // 0–1 normalised
  y: rand(0, 1),
  r: rand(0.4, 2.2),
  baseAlpha: rand(0.35, 1),
  twinkleSpeed: rand(0.4, 1.4),
  twinkleOffset: rand(0, Math.PI * 2),
  parallaxFactor: rand(0.003, 0.018),
  type: i % 12 === 0 ? 'cross' : i % 7 === 0 ? 'glow' : 'dot',
}));

// Shooting stars
const SHOOTS = Array.from({ length: 6 }, () => ({
  delay: rand(0, 25),
  period: rand(6, 16),
  startX: rand(0.05, 0.65),
  startY: rand(0.02, 0.35),
  len: rand(120, 260),
  angle: rand(28, 52) * (Math.PI / 180),
}));

// Sun rays (geometry only — animation is CSS)
const RAYS = Array.from({ length: 16 }, (_, i) => ({
  angle: (i / 16) * 360,
  len:   rand(55, 115),
  w:     rand(2, 5.5),
  delay: rand(0, 4),
  dur:   rand(3, 6),
  op:    rand(0.3, 0.75),
}));

// ─── Sky gradients ───────────────────────────────────────────────────────────
const SKY = {
  night: 'linear-gradient(180deg,#010b1a 0%,#020d22 45%,#08080f 100%)',
  dusk:  'linear-gradient(180deg,#0f0a1f 0%,#1a0a2e 20%,#3d1040 50%,#7a2a3b 80%,#c4703a 100%)',
  dawn:  'linear-gradient(180deg,#0d1b2a 0%,#1e3a5f 30%,#4a6fa5 60%,#e8a87c 90%,#f4c87c 100%)',
  day:   'linear-gradient(180deg,#0a1628 0%,#1a3a6b 25%,#2d6fa6 60%,#87ceeb 100%)',
};

// Sun position by mode
const SUN_POS = {
  day:  { right:'20%', top:'12%' },
  dawn: { right:'15%', top:'55%' },
  dusk: { right:'7%',  top:'62%' },
};

// ─── Canvas star renderer ─────────────────────────────────────────────────────
function drawStars(ctx, w, h, t, mx, my, scrollY, alpha = 1) {
  ctx.clearRect(0, 0, w, h);

  for (const s of STARS) {
    const twinkle = 0.5 + 0.5 * Math.sin(t * s.twinkleSpeed + s.twinkleOffset);
    const a = s.baseAlpha * twinkle * alpha;
    if (a < 0.03) continue;

    const px = s.x * w + mx * s.parallaxFactor * w;
    const py = s.y * h + my * s.parallaxFactor * h - scrollY * s.parallaxFactor * 0.6;

    if (s.type === 'cross') {
      ctx.save();
      ctx.globalAlpha = a;
      ctx.strokeStyle = '#c8dcff';
      ctx.lineWidth = 0.8;
      const arm = s.r * 2.8;
      ctx.beginPath(); ctx.moveTo(px, py - arm); ctx.lineTo(px, py + arm); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(px - arm, py); ctx.lineTo(px + arm, py); ctx.stroke();
      ctx.restore();
    } else if (s.type === 'glow') {
      const g = ctx.createRadialGradient(px, py, 0, px, py, s.r * 3.5);
      g.addColorStop(0, `rgba(200,220,255,${a})`);
      g.addColorStop(0.4, `rgba(150,180,255,${a * 0.5})`);
      g.addColorStop(1, 'transparent');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(px, py, s.r * 3.5, 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.save();
      ctx.globalAlpha = a;
      ctx.fillStyle = '#dceaff';
      ctx.beginPath();
      ctx.arc(px, py, s.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  // Shooting stars
  for (const ss of SHOOTS) {
    const elapsed = (t + ss.delay) % ss.period;
    const progress = elapsed / ss.period;
    if (progress > 0.18) continue; // only draw during first 18% of period

    const fade = progress < 0.02 ? progress / 0.02
               : progress > 0.14 ? 1 - (progress - 0.14) / 0.04
               : 1;
    const dist = (progress / 0.18) * ss.len;
    const sx = ss.startX * w + Math.cos(ss.angle) * dist;
    const sy = ss.startY * h + Math.sin(ss.angle) * dist;
    const ex = sx - Math.cos(ss.angle) * Math.min(dist, ss.len * 0.7);
    const ey = sy - Math.sin(ss.angle) * Math.min(dist, ss.len * 0.7);

    const g = ctx.createLinearGradient(ex, ey, sx, sy);
    g.addColorStop(0, 'transparent');
    g.addColorStop(1, `rgba(255,255,255,${fade * alpha * 0.9})`);

    ctx.save();
    ctx.strokeStyle = g;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(ex, ey);
    ctx.lineTo(sx, sy);
    ctx.stroke();
    ctx.restore();
  }
}

// ─── Preview Toggle (click-to-open, outside-click-to-close) ──────────────────
function ToggleMenu({ previewMode, setPreviewMode, showToggle, setShowToggle }) {
  const ref = React.useRef(null);

  // Close on outside click
  React.useEffect(() => {
    if (!showToggle) return;
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setShowToggle(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [showToggle, setShowToggle]);

  return (
    <div
      ref={ref}
      className="fixed bottom-6 right-6 z-50"
      style={{ pointerEvents: 'all' }}
    >
      {/* Menu (rendered above the pill) */}
      {showToggle && (
        <div style={{
          position: 'absolute',
          bottom: '100%',
          right: 0,
          // Transparent padding bridges the gap so mouse doesn't leave container
          paddingBottom: '8px',
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
            alignItems: 'flex-end',
            background: 'rgba(8,8,20,0.72)',
            backdropFilter: 'blur(18px)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '14px',
            padding: '8px',
          }}>
            {PREVIEW_MODES.map((m) => (
              <button
                key={m}
                onClick={() => { setPreviewMode(m); setShowToggle(false); }}
                style={{
                  width: '100%',
                  padding: '6px 14px',
                  borderRadius: '10px',
                  border: 'none',
                  background: previewMode === m ? 'rgba(255,255,255,0.15)' : 'transparent',
                  color: previewMode === m ? '#fff' : 'rgba(255,255,255,0.5)',
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.07em',
                  cursor: 'pointer',
                  textTransform: 'capitalize',
                  whiteSpace: 'nowrap',
                  textAlign: 'left',
                  transition: 'background 0.15s ease, color 0.15s ease',
                }}
                onMouseEnter={(e) => {
                  if (previewMode !== m) {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.color = 'rgba(255,255,255,0.85)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (previewMode !== m) {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = 'rgba(255,255,255,0.5)';
                  }
                }}
              >
                {m === 'auto' ? `auto · ${timeOfDay(getHour())}` : m}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Trigger pill */}
      <button
        onClick={() => setShowToggle((v) => !v)}
        style={{
          padding: '6px 14px',
          borderRadius: '20px',
          border: showToggle
            ? '1px solid rgba(255,255,255,0.3)'
            : '1px solid rgba(255,255,255,0.15)',
          background: showToggle ? 'rgba(255,255,255,0.12)' : 'rgba(8,8,20,0.55)',
          backdropFilter: 'blur(14px)',
          color: 'rgba(255,255,255,0.7)',
          fontSize: '11px',
          fontWeight: 600,
          letterSpacing: '0.07em',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}
      >
        <span style={{ fontSize: '14px' }}>🌍</span>
        {previewMode === 'auto' ? timeOfDay(getHour()) : previewMode}
      </button>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
const BackgroundEffects = () => {
  const { mode, previewMode, setPreviewMode } = useTheme();
  const [showToggle, setShowToggle] = React.useState(false);
  const canvasRef  = useRef(null);
  const sunRef     = useRef(null);
  const glowRef    = useRef(null);
  const wrapperRef = useRef(null);

  // Derived mode — always fresh, read inside rAF
  const getMode = React.useCallback(() => mode, [mode]);

  // Re-run whenever context mode changes
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let raf;
    let mx = 0, my = 0, smx = 0, smy = 0;
    let scrollY = window.scrollY;
    let lastHour = getHour();

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const onMove = (e) => {
      mx = e.clientX - window.innerWidth  / 2;
      my = e.clientY - window.innerHeight / 2;
    };
    const onScroll = () => { scrollY = window.scrollY; };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('scroll',    onScroll, { passive: true });

    const tick = (timestamp) => {
      const t = timestamp / 1000;
      smx += (mx - smx) * 0.06;
      smy += (my - smy) * 0.06;

      const mode = getMode();
      const isNight = mode === 'night';
      const starAlpha = mode === 'night' ? 1 : mode === 'dusk' || mode === 'dawn' ? 0.45 : 0;

      // Update canvas
      const ctx = canvas.getContext('2d');
      if (starAlpha > 0) {
        drawStars(ctx, canvas.width, canvas.height, t, smx, smy, scrollY, starAlpha);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }

      // Update sun parallax via direct style (no React re-render)
      if (sunRef.current) {
        sunRef.current.style.display = isNight ? 'none' : 'block';
        if (!isNight) {
          const ox = (-smx * 0.025).toFixed(2);
          const oy = (-smy * 0.018).toFixed(2);
          sunRef.current.style.transform = `translate(${ox}px,${oy}px)`;
        }
      }

      // Update mouse-follow glow
      if (glowRef.current) {
        const gx = ((smx / window.innerWidth)  * 50 + 50).toFixed(1);
        const gy = ((smy / window.innerHeight) * 50 + 50).toFixed(1);
        const col = isNight ? 'rgba(59,100,246,0.045)' : 'rgba(251,191,36,0.045)';
        glowRef.current.style.background =
          `radial-gradient(500px circle at ${gx}% ${gy}%,${col},transparent 80%)`;
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    // Hour check every minute
    const hourInterval = setInterval(() => {
      const h = getHour();
      if (h !== lastHour) { lastHour = h; /* mode recomputed in tick via getMode */ }
    }, 60_000);

    return () => {
      cancelAnimationFrame(raf);
      clearInterval(hourInterval);
      window.removeEventListener('resize',    resize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('scroll',    onScroll);
    };
  }, [getMode]);

  const isNight = mode === 'night';
  const sunPos  = SUN_POS[mode] ?? SUN_POS.day;

  return (
    <Fragment>
    <div
      ref={wrapperRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ background: SKY[mode], transition: 'background 2.5s ease' }}
    >
      {/* ── Star canvas ───────────────────────────────────── */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: isNight ? 1 : mode === 'dusk' || mode === 'dawn' ? 0.6 : 0, transition: 'opacity 2s ease' }}
      />

      {/* ── Moon (night only) ─────────────────────────────── */}
      {isNight && (
        <div className="absolute" style={{ right:'12%', top:'8%' }}>
          <div style={{
            width:'52px', height:'52px', borderRadius:'50%',
            background:'radial-gradient(circle at 35% 35%,#fffbe6,#fde68a 60%,#f6c84a)',
            boxShadow:'0 0 30px rgba(253,230,138,.45),0 0 70px rgba(253,230,138,.18)',
            animation:'moon-pulse 8s ease-in-out infinite',
          }}>
            {/* craters */}
            <div style={{position:'absolute',top:'28%',left:'25%',width:'8px',height:'8px',borderRadius:'50%',background:'rgba(180,140,30,.3)'}}/>
            <div style={{position:'absolute',top:'52%',left:'55%',width:'5px',height:'5px',borderRadius:'50%',background:'rgba(180,140,30,.25)'}}/>
            <div style={{position:'absolute',top:'64%',left:'32%',width:'6px',height:'6px',borderRadius:'50%',background:'rgba(180,140,30,.2)'}}/>
          </div>
          {/* moon glow halo */}
          <div style={{
            position:'absolute', top:'50%', left:'50%',
            width:'120px', height:'120px',
            transform:'translate(-50%,-50%)',
            borderRadius:'50%',
            background:'radial-gradient(circle,rgba(253,230,138,.12) 0%,transparent 70%)',
            animation:'moon-halo 10s ease-in-out infinite',
            pointerEvents:'none',
          }}/>
        </div>
      )}

      {/* ── Nebula / Milky Way clouds (night) ─────────────── */}
      {isNight && (
        <>
          <div style={{position:'absolute',top:'8%',left:'-8%',width:'55%',height:'28%',background:'radial-gradient(ellipse,rgba(80,60,140,.07) 0%,transparent 70%)',transform:'rotate(-18deg)',filter:'blur(35px)'}}/>
          <div style={{position:'absolute',top:'42%',right:'-5%',width:'48%',height:'24%',background:'radial-gradient(ellipse,rgba(40,60,120,.06) 0%,transparent 70%)',transform:'rotate(14deg)',filter:'blur(45px)'}}/>
        </>
      )}

      {/* ── Sun + Rays ────────────────────────────────────── */}
      <div
        ref={sunRef}
        className="absolute"
        style={{
          right: sunPos.right,
          top:   sunPos.top,
          display: isNight ? 'none' : 'block',
          transition: 'right 3s ease, top 3s ease',
          opacity: mode === 'dusk' || mode === 'dawn' ? 0.75 : 1,
        }}
      >
        <div style={{ position:'relative', width:'140px', height:'140px' }}>
          {/* Rays */}
          {RAYS.map((r, i) => (
            <div
              key={i}
              style={{
                position:'absolute',
                left:'50%', top:'50%',
                width:`${r.len}px`,
                height:`${r.w}px`,
                transformOrigin:'0 50%',
                transform:`rotate(${r.angle}deg)`,
                background:`linear-gradient(90deg,rgba(255,220,80,${r.op}),rgba(255,180,40,.18),transparent)`,
                borderRadius:'4px',
                animation:`sun-ray ${r.dur}s ease-in-out ${r.delay}s infinite`,
              }}
            />
          ))}

          {/* Outer halo */}
          <div style={{
            position:'absolute', left:'50%', top:'50%',
            width:'100px', height:'100px',
            transform:'translate(-50%,-50%)',
            borderRadius:'50%',
            background:'radial-gradient(circle,rgba(253,224,71,.18) 0%,transparent 70%)',
            animation:'sun-halo 6s ease-in-out infinite',
          }}/>

          {/* Core */}
          <div style={{
            position:'absolute', left:'50%', top:'50%',
            width:'58px', height:'58px',
            transform:'translate(-50%,-50%)',
            borderRadius:'50%',
            background:'radial-gradient(circle at 40% 40%,#fff9e0,#fde047 45%,#f59e0b)',
            boxShadow:'0 0 42px rgba(251,191,36,.85),0 0 90px rgba(251,191,36,.4),0 0 180px rgba(251,191,36,.15)',
            animation:'sun-pulse 4s ease-in-out infinite',
          }}/>
        </div>
      </div>

      {/* Dusk / dawn horizon glow */}
      {(mode === 'dusk' || mode === 'dawn') && (
        <div style={{
          position:'absolute', bottom:0, left:0, right:0, height:'38%',
          background: mode === 'dusk'
            ? 'linear-gradient(0deg,rgba(180,60,20,.28),rgba(200,80,40,.12),transparent)'
            : 'linear-gradient(0deg,rgba(200,120,60,.22),rgba(220,160,80,.08),transparent)',
        }}/>
      )}

      {/* Mouse-follow glow (updated via ref, no re-render) */}
      <div ref={glowRef} className="absolute inset-0" />



      {/* ── All CSS keyframes ─────────────────────────────── */}
      <style>{`
        @keyframes moon-pulse {
          0%,100% { box-shadow:0 0 30px rgba(253,230,138,.45),0 0 70px rgba(253,230,138,.18); }
          50%      { box-shadow:0 0 50px rgba(253,230,138,.65),0 0 110px rgba(253,230,138,.28); }
        }
        @keyframes moon-halo {
          0%,100% { transform:translate(-50%,-50%) scale(1);   opacity:.6; }
          50%      { transform:translate(-50%,-50%) scale(1.3); opacity:1;  }
        }
        @keyframes sun-pulse {
          0%,100% { box-shadow:0 0 42px rgba(251,191,36,.85),0 0 90px rgba(251,191,36,.4),0 0 180px rgba(251,191,36,.15);
                    transform:translate(-50%,-50%) scale(1); }
          50%      { box-shadow:0 0 60px rgba(251,191,36,1),  0 0 130px rgba(251,191,36,.5),0 0 220px rgba(251,191,36,.22);
                    transform:translate(-50%,-50%) scale(1.04); }
        }
        @keyframes sun-halo {
          0%,100% { transform:translate(-50%,-50%) scale(1);   opacity:.6; }
          50%      { transform:translate(-50%,-50%) scale(1.35);opacity:1;  }
        }
        @keyframes sun-ray {
          0%,100% { opacity:var(--op,.5); transform:rotate(var(--a,0deg)) scaleX(1);    }
          50%      { opacity:.95;          transform:rotate(var(--a,0deg)) scaleX(1.18); }
        }
      `}</style>
    </div>

    {/* ── Preview Toggle — click-to-open, outside-click-to-close ── */}
    <ToggleMenu
      previewMode={previewMode}
      setPreviewMode={setPreviewMode}
      showToggle={showToggle}
      setShowToggle={setShowToggle}
    />
    </Fragment>
  );
};

export default BackgroundEffects;
