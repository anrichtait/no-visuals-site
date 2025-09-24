<script lang="ts">
import { ExternalLink, ArrowRight, CheckCircle, BarChart3, Zap } from '$lib/icons';
</script>

<section class="cta-section" data-theme="dark">
  <div class="cta-container">

    <div class="background-elements">
      <div class="gradient-orb gradient-orb-1"></div>
      <div class="gradient-orb gradient-orb-2"></div>
      <div class="grid-pattern"></div>
    </div>

    <div class="content-wrapper">
      <div class="cta-header">
        <div class="header-accent">
          <span class="accent-line-cta"></span>
          <span class="ready-text">Ready?</span>
        </div>

        <h2 class="cta-title">
          Build Something
          <span class="highlight-text">Extraordinary</span>
        </h2>

        <p class="cta-description">
          Stop settling for websites that don't work. Let's build a digital solution that
          generates real results for your firm. No fluff, no empty promises—just performance-driven
          marketing that delivers qualified leads.
        </p>

        <div class="cta-button-wrapper">
          <a href="/contact_us" class="primary-cta-button">
            <span class="button-text">Start Your Project</span>
            <div class="button-icon">
              <ArrowRight class="w-5 h-5" />
            </div>
          </a>
        </div>
      </div>

      <div class="value-props-grid">
        <div class="value-prop-card">
          <div class="prop-icon">
            <CheckCircle class="w-6 h-6" />
          </div>
          <h3 class="prop-title">Free Strategy Session</h3>
          <p class="prop-description">No sales pitch. Just a genuine conversation about your goals and how we can help you achieve them.</p>
        </div>

        <div class="value-prop-card">
          <div class="prop-icon">
            <BarChart3 class="w-6 h-6" />
          </div>
          <h3 class="prop-title">Radical Transparency</h3>
          <p class="prop-description">Track every metric that matters with our proprietary dashboard. See exactly how your investment drives results.</p>
        </div>

        <div class="value-prop-card">
          <div class="prop-icon">
            <Zap class="w-6 h-6" />
          </div>
          <h3 class="prop-title">Performance Driven</h3>
          <p class="prop-description">Every design decision is backed by data. We build for conversions, not just aesthetics.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
.cta-section {
  background: #2C2C2C;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 1rem;
  position: relative;
  overflow: hidden;
}

.cta-container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.background-elements {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.1;
}

.gradient-orb-1 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, #7C9885 0%, transparent 70%);
  top: 20%;
  left: 10%;
}

.gradient-orb-2 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, #7C9885 0%, transparent 70%);
  bottom: 20%;
  right: 10%;
}

.grid-pattern {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 40px 40px;
}

.content-wrapper {
  position: relative;
  z-index: 3;
}

.cta-header {
  text-align: center;
  margin-bottom: 4rem;
}

.header-accent {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.accent-line-cta {
  width: 60px;
  height: 1px;
  background: linear-gradient(90deg, #7C9885 0%, transparent 100%);
}

.ready-text {
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: #7C9885;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.cta-title {
  font-family: 'Syne', sans-serif;
  font-weight: 700;
  font-size: clamp(4rem, 10vw, 7rem);
  color: white;
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin-bottom: 2rem;
}

.highlight-text {
  display: block;
  color: #7C9885;
  position: relative;
}

.cta-description {
  font-family: 'Inter', sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto 3rem;
}

.cta-button-wrapper {
  margin-bottom: 4rem;
}

.primary-cta-button {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 3rem;
  border-radius: 16px;
  background: linear-gradient(135deg, #7C9885 0%, #6A8470 100%);
  color: white;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 1.125rem;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow:
    0 4px 14px rgba(124, 152, 133, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.1);
}

.primary-cta-button:hover {
  transform: translateY(-2px);
  box-shadow:
    0 8px 25px rgba(124, 152, 133, 0.4),
    0 0 0 1px rgba(255, 255, 255, 0.2);
}

.button-icon {
  padding: 0.5rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.primary-cta-button:hover .button-icon {
  background: rgba(255, 255, 255, 0.2);
  transform: translateX(2px);
}

.value-props-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.value-prop-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.value-prop-card:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(124, 152, 133, 0.2);
  transform: translateY(-4px);
}

.prop-icon {
  width: 60px;
  height: 60px;
  border-radius: 16px;
  background: rgba(124, 152, 133, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: #7C9885;
}

.prop-title {
  font-family: 'Syne', sans-serif;
  font-weight: 600;
  font-size: 1.25rem;
  color: white;
  margin-bottom: 1rem;
  letter-spacing: -0.01em;
}

.prop-description {
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  font-weight: 400;
}

@media (max-width: 768px) {
  .value-props-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>
