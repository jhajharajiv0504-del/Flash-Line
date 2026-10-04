import { useEffect, useState } from 'react';
import { Activity, ArrowDown, ArrowRight, Check, ChevronRight, CloudFog, Cpu, LocateFixed, Radio, RotateCcw, ShieldAlert, Signal, Siren, Zap } from 'lucide-react';

const lamps = Array.from({ length: 9 }, (_, i) => i);

function App() {
  const [active, setActive] = useState(false);
  const [litCount, setLitCount] = useState(0);

  useEffect(() => {
    if (!active) {
      setLitCount(0);
      return;
    }
    setLitCount(0);
    const timers = lamps.map((_, i) => window.setTimeout(() => setLitCount(i + 1), 360 + i * 330));
    return () => timers.forEach(window.clearTimeout);
  }, [active]);

  const simulate = () => {
    setActive(true);
    document.getElementById('simulation')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };
  const reset = () => setActive(false);

  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Fogline home">
          <span className="brand-mark"><span /></span>
          <span>FOGLINE <small>ROAD SAFETY SYSTEMS</small></span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#system">The system</a>
          <a href="#simulation">Live simulation</a>
          <a href="#technology">Technology</a>
        </nav>
        <a className="nav-status" href="#simulation"><i /> SYSTEM DEMO</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-grain" />
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" />CONNECTED ROAD SAFETY <span className="eyebrow-index">01 / 04</span></div>
          <h1>Smart Fog-Based<br /><em>Accident Alert</em><br />System</h1>
          <p className="hero-subtitle">Turning street lights into life-saving signals in fog</p>
          <p className="hero-desc">When visibility disappears, the road itself can speak. A connected network detects impact and warns every driver approaching the scene.</p>
          <div className="hero-actions">
            <button className="button-primary" onClick={simulate} data-testid="button-simulate-accident"><Siren size={17} /> Simulate Accident <ArrowRight size={16} /></button>
            <a className="text-link" href="#system">Explore the system <ArrowDown size={15} /></a>
          </div>
          <div className="hero-meta"><span><i className="live-dot" /> DEMO NETWORK ONLINE</span><span>FIELD TEST / 2025</span></div>
        </div>
        <div className="hero-scene" aria-label="Illustrated foggy road with connected warning lights">
          <div className="scene-coordinate">N 28°36′ / E 77°12′ <span>LOW VISIBILITY ZONE</span></div>
          <div className="scene-fog fog-one" /><div className="scene-fog fog-two" /><div className="scene-fog fog-three" />
          <div className="horizon" />
          <div className="road">
            <div className="road-edge left-edge" /><div className="road-edge right-edge" />
            <div className="road-dash dash-a" /><div className="road-dash dash-b" /><div className="road-dash dash-c" />
          </div>
          {[0,1,2,3,4].map((n) => <div key={n} className={`hero-lamp lamp-${n}`}><span className="lamp-glow" /><span className="lamp-head" /><span className="lamp-pole" /></div>)}
          <div className="scene-node"><span className="node-pulse" /><LocateFixed size={14} /> SENSOR NODE 04 <b>CONNECTED</b></div>
          <div className="scene-caption"><span>01</span><div>VISIBILITY: <b>38M</b><br />FOG DENSITY: <b>HIGH</b></div></div>
        </div>
        <div className="hero-bottom"><span>BUILT FOR THE MOMENT BEFORE THE NEXT IMPACT</span><span>SCROLL TO EXPLORE <ArrowDown size={13} /></span></div>
      </section>

      <section className="problem section-wrap" id="system">
        <div className="section-index">01 <span>THE PROBLEM</span></div>
        <div className="problem-content">
          <div className="section-heading">
            <p className="kicker">WHEN THE ROAD DISAPPEARS</p>
            <h2>Fog turns a<br />small incident into<br /><em>a chain reaction.</em></h2>
          </div>
          <div className="problem-right">
            <p className="body-large">A crash in dense fog is often invisible until it’s too late. Drivers have no warning, no time to react, and no signal to slow down.</p>
            <div className="risk-list">
              <div><span>01</span><CloudFog /><p><b>Visibility collapses</b><small>Fog cuts the road down to a few metres.</small></p></div>
              <div><span>02</span><ShieldAlert /><p><b>Accidents go unseen</b><small>Approaching drivers can’t see what’s ahead.</small></p></div>
              <div><span>03</span><Activity /><p><b>Secondary collisions</b><small>Every unalerted vehicle adds to the risk.</small></p></div>
            </div>
            <div className="quote-callout"><span className="quote-mark">“</span><p>Every second delay in visibility can cost lives.</p></div>
          </div>
        </div>
      </section>

      <section className="flow-section">
        <div className="section-wrap flow-inner">
          <div className="section-index">02 <span>THE RESPONSE</span></div>
          <div className="flow-head"><div><p className="kicker">FROM IMPACT TO INSTANT WARNING</p><h2>A signal that<br /><em>travels ahead.</em></h2></div><p>Detection, processing and warning happen automatically—in the same infrastructure already lighting the road.</p></div>
          <div className="flow-track">
            {['Accident','Sensor','Processing','Street Lights turn RED','Driver Alert'].map((step, i) => <div className={`flow-step ${i === 3 ? 'flow-danger' : ''}`} key={step}><span className="flow-no">0{i + 1}</span><div className="flow-symbol">{i === 0 ? <Activity /> : i === 1 ? <Radio /> : i === 2 ? <Cpu /> : i === 3 ? <Zap /> : <ShieldAlert />}</div><b>{step}</b>{i < 4 && <ChevronRight className="flow-chevron" size={17} />}</div>)}
          </div>
        </div>
      </section>

      <section className={`simulation-section ${active ? 'is-alert' : ''}`} id="simulation">
        <div className="simulation-wrap">
          <div className="sim-topline"><div className="section-index">03 <span>LIVE SYSTEM SIMULATION</span></div><div className="sim-live"><span className="live-dot" /> NETWORK {active ? 'ALERT ACTIVE' : 'STANDBY'}</div></div>
          <div className="sim-title-row"><div><p className="kicker">SEE THE WARNING TRAVEL</p><h2>A road that<br /><em>responds.</em></h2></div><p className="sim-intro">Trigger an incident. Watch the streetlights ahead turn into a visible warning, before a driver reaches the danger.</p></div>
          <div className="sim-panel">
            <div className="sim-panel-head"><div><span className="panel-label">CORRIDOR 04 <i /> FOG CONDITIONS</span><h3>North Ridge Road</h3></div><div className="panel-readout"><span>VISIBILITY<b>38 m</b></span><span>NETWORK<b className="good">CONNECTED</b></span></div></div>
            <div className="road-stage">
              <div className="stage-scan" />
              <div className="stage-fog stage-fog-a" /><div className="stage-fog stage-fog-b" /><div className="stage-fog stage-fog-c" />
              <div className="stage-road"><div className="stage-center-line" /><div className="stage-shoulder" /></div>
              <div className="stage-label label-near">APPROACHING TRAFFIC <span>→</span></div>
              <div className="stage-label label-danger">INCIDENT ZONE <ShieldAlert size={13} /></div>
              <div className="accident-marker"><span className="marker-ring" /><span className="marker-core" /><small>IMPACT DETECTED</small></div>
              {lamps.map((i) => <div key={i} className={`road-lamp road-lamp-${i} ${i < litCount ? 'lamp-active' : ''}`}><span className="road-lamp-light" /><span className="road-lamp-shaft" /><span className="road-lamp-foot" /></div>)}
              {active && litCount > 1 && <div className="warning-banner" role="alert" aria-live="assertive"><span className="warning-icon"><ShieldAlert size={18} /></span><span><b><span aria-hidden="true">⚠︎ </span>Accident Ahead – Slow Down</b><small>ALERT RELAYED TO APPROACHING TRAFFIC</small></span><span className="warning-live">LIVE</span></div>}
              <div className="stage-legend"><span><i className="legend-white" /> NORMAL LIGHTING</span><span><i className="legend-red" /> HAZARD SIGNAL</span></div>
            </div>
            <div className="sim-panel-foot"><div className="sim-event"><span className={active ? 'event-active' : ''} /><b>{active ? litCount >= lamps.length ? 'ALERT PROPAGATED' : 'SIGNAL PROPAGATING' : 'AWAITING INCIDENT'}</b><small>{active ? 'Lights activate sequentially along the corridor' : 'All corridor lights operating normally'}</small></div><div className="sim-controls">{active && <button className="button-reset" onClick={reset} data-testid="button-reset-simulation"><RotateCcw size={15} /> Reset</button>}<button className={`button-trigger ${active ? 'triggered' : ''}`} onClick={active ? reset : () => setActive(true)} data-testid="button-trigger-accident">{active ? <><RotateCcw size={15} /> Reset simulation</> : <><Siren size={16} /> Trigger Accident</>}</button></div></div>
          </div>
          <p className="sim-footnote"><span>SIMULATION ONLY</span> Demonstrating a sensor-to-streetlight alert sequence. No live road infrastructure is connected.</p>
        </div>
      </section>

      <section className="technology section-wrap" id="technology">
        <div className="section-index">04 <span>THE TECHNOLOGY</span></div>
        <div className="tech-content">
          <div className="tech-heading"><p className="kicker">SIMPLE HARDWARE. A SMARTER ROAD.</p><h2>Designed to work<br />with what’s <em>already there.</em></h2><p>Affordable components. Reliable communication. A system ready to grow from a single road to an entire city.</p></div>
          <div className="tech-grid">
            <div className="tech-item"><span className="tech-number">01 / EDGE</span><div className="tech-icon"><Cpu /></div><h3>On-road processing</h3><p>ESP32 or Raspberry Pi detects a collision signal and coordinates a local response.</p><div className="tech-tag">ESP32 <i /> RASPBERRY PI</div></div>
            <div className="tech-item"><span className="tech-number">02 / SENSE</span><div className="tech-icon"><Activity /></div><h3>Connected sensing</h3><p>Sensors identify impact. GPS pins the incident to an exact location for precision alerts.</p><div className="tech-tag">SENSORS <i /> GPS <i /> IoT</div></div>
            <div className="tech-item"><span className="tech-number">03 / RELAY</span><div className="tech-icon"><Signal /></div><h3>Resilient communication</h3><p>Flexible network options deliver the warning across varied road and coverage conditions.</p><div className="tech-tag">LoRa <i /> 4G <i /> WiFi</div></div>
          </div>
        </div>
      </section>

      <section className="impact-section">
        <div className="impact-wrap">
          <div className="section-index">05 <span>THE IMPACT</span></div>
          <div className="impact-heading"><p className="kicker">A SMALL SIGNAL. A SAFER JOURNEY.</p><h2>Make every light<br />count <em>for safety.</em></h2></div>
          <div className="impact-list">
            <div><span>01</span><b>Prevents accidents</b><p>Earlier warnings give drivers time and distance to react.</p><Check /></div>
            <div><span>02</span><b>Works in fog</b><p>Visual signals cut through when visibility itself fails.</p><Check /></div>
            <div><span>03</span><b>Fully automated</b><p>Detection triggers an alert without waiting for a call.</p><Check /></div>
            <div><span>04</span><b>Scalable to smart cities</b><p>One connected corridor can become a city-wide network.</p><Check /></div>
          </div>
        </div>
        <div className="impact-visual"><div className="impact-orbit orbit-a" /><div className="impact-orbit orbit-b" /><div className="impact-signal"><span><Zap /></span></div><div className="impact-coordinate">A SIGNAL, SENT AHEAD<br /><b>ROAD SAFETY / 001</b></div></div>
      </section>

      <footer className="footer"><a className="brand" href="#top"><span className="brand-mark"><span /></span><span>FOGLINE <small>ROAD SAFETY SYSTEMS</small></span></a><div className="footer-message">THE ROAD CAN WARN YOU.<br /><span>TEAM REBELS.</span></div><a className="back-top" href="#top">BACK TO TOP <ArrowDown size={14} /></a><div className="footer-bottom"><span>SMART FOG-BASED ACCIDENT ALERT SYSTEM</span><span>BUILT FOR SAFER ROADS, EVERYWHERE.</span><span>© TEAM REBELS</span></div></footer>
    </main>
  );
}

export default App;