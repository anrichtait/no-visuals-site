<script lang="ts">
  import { onMount } from 'svelte';
  import { BarChart3, TrendingUp, CheckCircle, Zap } from '$lib/icons';

  let rootEl = $state<HTMLElement | null>(null);
  let visible = $state(false);
  let isLive = $state(false);

  // Animation counters for the metrics
  let accuracy = $state(0);
  let eventsPerHour = $state(0);
  let monthlyROI = $state(0);

  // Session info
  let sessionStart = new Date();
  let activeUsers = $state(3);

  // Activity feed
  let activities = $state([
    { event: "Lead qualification completed", time: "2m ago", type: "lead", color: "text-[#7C9885]" },
    { event: "High-intent page view tracked", time: "5m ago", type: "view", color: "text-blue-500" },
    { event: "Form completion analyzed", time: "8m ago", type: "form", color: "text-purple-500" }
  ]);

  const activityTypes = [
    { event: "New qualified lead captured", type: "lead", color: "text-[#7C9885]" },
    { event: "High-value visitor identified", type: "view", color: "text-blue-500" },
    { event: "Email engagement tracked", type: "email", color: "text-purple-500" },
    { event: "Conversion goal achieved", type: "conversion", color: "text-green-600" },
    { event: "Attribution model updated", type: "attribution", color: "text-orange-500" },
    { event: "ROI calculation completed", type: "roi", color: "text-indigo-500" }
  ];

  function incrementTime(timeStr: string): string {
    const match = timeStr.match(/(\d+)m ago/);
    if (match) {
      const minutes = parseInt(match[1]) + 1;
      return `${minutes}m ago`;
    }
    return timeStr;
  }

  onMount(() => {
    if (!rootEl) return;
    const obs = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          visible = true;
          
          // Animate counters when visible
          setTimeout(() => {
            const animateCounter = (target: number, setter: (val: number) => void, duration = 2000) => {
              let start = 0;
              const increment = target / (duration / 16);
              const timer = setInterval(() => {
                start += increment;
                if (start >= target) {
                  setter(target);
                  clearInterval(timer);
                } else {
                  setter(Math.floor(start));
                }
              }, 16);
            };

            // Realistic but impressive starting values
            animateCounter(97.8, (val) => accuracy = val);
            animateCounter(200, (val) => eventsPerHour = val);
            animateCounter(1000, (val) => monthlyROI = val);

            // Start live updates after initial animation
            setTimeout(() => {
              isLive = true;
              startLiveUpdates();
            }, 2500);
          }, 300);
          
          obs.disconnect();
        }
      }
    }, { threshold: 0.12 });
    obs.observe(rootEl);
  });

  function startLiveUpdates() {
    // Subtle metric fluctuations
    setInterval(() => {
      if (isLive) {
        // Accuracy fluctuates subtly (97.2% - 98.9%)
        accuracy = 97.2 + Math.random() * 1.7;
        
        // Events per hour grows slowly
        eventsPerHour = eventsPerHour + Math.floor(Math.random() * 25);
        
        // Monthly ROI occasionally increments
        if (Math.random() > 0.7) {
          monthlyROI = monthlyROI + Math.floor(Math.random() * 100);
        }

        // Active users fluctuates slightly
        activeUsers = 10 + Math.floor(Math.random() * 8);
      }
    }, 4000 + Math.random() * 3000);

    // Update activity feed
    setInterval(() => {
      if (isLive) {
        const newActivity = activityTypes[Math.floor(Math.random() * activityTypes.length)];
        activities = [
          { ...newActivity, time: "Just now" },
          ...activities.slice(0, 2).map(a => ({ ...a, time: incrementTime(a.time) }))
        ];
      }
    }, 12000 + Math.random() * 6000);
  }

  const features = [
    {
      icon: CheckCircle,
      title: "Own Your Data",
      description: "Complete control over your client analytics and insights"
    },
    {
      icon: BarChart3,
      title: "Real-Time Tracking",
      description: "Live dashboard updates every visitor interaction"
    },
    {
      icon: TrendingUp,
      title: "Actionable Insights",
      description: "Clear ROI metrics that drive business decisions"
    },
    {
      icon: Zap,
      title: "Performance Focus",
      description: "Built for speed with minimal impact on site performance"
    }
  ];
</script>

<section bind:this={rootEl}
    aria-labelledby="usp-title"
    class="mx-auto max-w-7xl px-6 py-20 lg:py-28">

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        
        <!-- Premium Data Visualization - Left Side -->
        <div class="flex items-center justify-center order-2 lg:order-1">
            <div class="relative w-full max-w-lg">
                
                <!-- Main Dashboard Container -->
                <div class="relative bg-gradient-to-br from-white via-white to-gray-50 rounded-2xl shadow-2xl border border-gray-200/50 overflow-hidden">
                    
                    <!-- Dashboard Header -->
                    <div class="px-6 py-4 bg-gradient-to-r from-[#2C2C2C] to-[#3C3C3C] text-white">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-3">
                                <div class="w-2 h-2 rounded-full bg-[#7C9885] animate-pulse"></div>
                                <span class="text-sm font-medium">Session: {sessionStart.getHours()}:{sessionStart.getMinutes().toString().padStart(2, '0')}</span>
                            </div>
                            <div class="text-xs text-green-400 flex items-center gap-1">
                                <div class="w-1 h-1 rounded-full bg-green-400"></div>
                                {activeUsers} active
                            </div>
                        </div>
                    </div>

                    <!-- Analytics Content -->
                    <div class="p-6 space-y-6">
                        
                        <!-- Key Metrics Row -->
                        <div class="grid grid-cols-3 gap-4">
                            <div class="text-center p-3 bg-gradient-to-br from-[#7C9885]/5 to-[#7C9885]/10 rounded-xl border border-[#7C9885]/20">
                                <div class="text-2xl font-bold text-[#2C2C2C] mb-1">{accuracy.toFixed(1)}%</div>
                                <div class="text-xs text-gray-600">Track Accuracy</div>
                            </div>
                            <div class="text-center p-3 bg-gradient-to-br from-blue-500/5 to-blue-500/10 rounded-xl border border-blue-500/20">
                                <div class="text-2xl font-bold text-[#2C2C2C] mb-1">{(eventsPerHour/1000).toFixed(1)}K</div>
                                <div class="text-xs text-gray-600">Events/Hour</div>
                            </div>
                            <div class="text-center p-3 bg-gradient-to-br from-purple-500/5 to-purple-500/10 rounded-xl border border-purple-500/20">
                                <div class="text-2xl font-bold text-[#2C2C2C] mb-1">${(monthlyROI/1000).toFixed(0)}K</div>
                                <div class="text-xs text-gray-600">ROI This Month</div>
                            </div>
                        </div>

                        <!-- Chart Visualization -->
                        <div class="relative h-32 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200/80 p-4 overflow-hidden">
                            
                            <!-- Animated Chart Lines -->
                            <div class="absolute inset-4">
                                <svg class="w-full h-full" viewBox="0 0 200 80">
                                    <!-- Grid lines -->
                                    <defs>
                                        <pattern id="grid" width="20" height="16" patternUnits="userSpaceOnUse">
                                            <path d="M 20 0 L 0 0 0 16" fill="none" stroke="#f3f4f6" stroke-width="0.5"/>
                                        </pattern>
                                    </defs>
                                    <rect width="200" height="80" fill="url(#grid)" />
                                    
                                    <!-- Data lines -->
                                    <path d="M10,60 Q50,45 90,35 T170,25" 
                                          fill="none" 
                                          stroke="#7C9885" 
                                          stroke-width="2" 
                                          opacity="0.8"
                                          class={visible ? "animate-draw-line" : "opacity-0"} />
                                    
                                    <path d="M10,65 Q50,55 90,50 T170,45" 
                                          fill="none" 
                                          stroke="#3b82f6" 
                                          stroke-width="2" 
                                          opacity="0.6"
                                          class={visible ? "animate-draw-line-delayed" : "opacity-0"} />
                                    
                                    <!-- Data points -->
                                    {#if visible}
                                        <circle cx="170" cy="25" r="3" fill="#7C9885" class="animate-pulse-dot">
                                            <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite"/>
                                        </circle>
                                        <circle cx="170" cy="45" r="3" fill="#3b82f6" class="animate-pulse-dot-delayed">
                                            <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" begin="0.5s"/>
                                        </circle>
                                    {/if}
                                </svg>
                            </div>
                            
                            <!-- Chart Labels -->
                            <div class="absolute bottom-1 left-4 text-xs text-gray-500">Conversion Rate</div>
                            <div class="absolute top-1 right-4 text-xs text-[#7C9885] font-medium">↗ 12%</div>
                        </div>

                        <!-- Recent Activity -->
                        <div class="space-y-3">
                            <h4 class="text-sm font-medium text-gray-700 flex items-center gap-2">
                                <div class="w-1.5 h-1.5 rounded-full bg-[#7C9885]"></div>
                                Live Activity
                            </h4>
                            <div class="space-y-2 text-xs">
                                {#each activities as activity}
                                    <div class="flex justify-between items-center py-1">
                                        <span class="text-gray-600">{activity.event}</span>
                                        <span class="{activity.color} font-medium">{activity.time}</span>
                                    </div>
                                {/each}
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Floating Elements for Depth -->
                <div class="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-[#7C9885]/20 to-[#7C9885]/5 rounded-full blur-xl animate-pulse"></div>
                <div class="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-500/15 to-purple-500/10 rounded-full blur-xl animate-pulse" style="animation-delay: 1s;"></div>
            </div>
        </div>

        <!-- Content - Right Side -->
        <div class="flex flex-col justify-center space-y-8 order-1 lg:order-2">

            <!-- Section Header -->
            <div class="space-y-6">
                <div class="flex items-center gap-4">
                    <span class="h-px w-12 bg-gradient-to-r from-[#7C9885] to-transparent"></span>
                    <span class="font-inter text-sm font-medium text-[#7C9885] uppercase tracking-wider">Powered by the</span>
                </div>
                
                <h1 class="font-syne font-bold text-5xl lg:text-6xl xl:text-7xl leading-[0.9] tracking-tight text-[#2C2C2C]">
                    <span class="block">No Visuals</span>
                    <span class="block text-[#7C9885]">Data Engine</span>
                </h1>
            </div>

            <!-- Main Description -->
            <div class="space-y-6">
                <p class="text-xl lg:text-2xl font-inter leading-relaxed text-[#2C2C2C] font-light">
                    Our proprietary analytics engine cuts through the noise to show you the exact ROI of every visitor, click, and lead.
                </p>

                <p class="text-lg leading-relaxed font-inter text-[#2C2C2C]/80">
                    While other agencies hide behind vague reports, we provide radical transparency. The No Visuals Data Engine is built into every site we design, giving you a clear, actionable window into your marketing performance and full ownership of your client data.
                </p>
            </div>

            <!-- Feature Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
                {#each features as feature}
                    <div class="flex items-start gap-4 p-6 rounded-xl bg-white/60 border border-white/80 hover:bg-white/80 hover:border-[#7C9885]/20 transition-all duration-300 group">
                        <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-[#7C9885]/10 flex items-center justify-center group-hover:bg-[#7C9885]/20 transition-colors duration-300">
                            <svelte:component this={feature.icon} class="w-5 h-5 text-[#7C9885]" />
                        </div>
                        <div>
                            <h3 class="font-syne text-lg font-semibold text-[#2C2C2C] mb-2">{feature.title}</h3>
                            <p class="text-sm text-[#2C2C2C]/70 leading-relaxed">{feature.description}</p>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>

<style>
    @keyframes draw-line {
        from {
            stroke-dasharray: 300;
            stroke-dashoffset: 300;
        }
        to {
            stroke-dasharray: 300;
            stroke-dashoffset: 0;
        }
    }

    @keyframes pulse-dot {
        0%, 100% {
            opacity: 1;
            transform: scale(1);
        }
        50% {
            opacity: 0.7;
            transform: scale(1.2);
        }
    }

    .animate-draw-line {
        animation: draw-line 2s ease-out forwards;
    }

    .animate-draw-line-delayed {
        animation: draw-line 2s ease-out 0.5s forwards;
    }

    .animate-pulse-dot {
        animation: pulse-dot 2s ease-in-out infinite;
    }

    .animate-pulse-dot-delayed {
        animation: pulse-dot 2s ease-in-out infinite 0.5s;
    }

    /* Smooth transitions */
    .group {
        transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
</style>

