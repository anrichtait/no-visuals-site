<script lang="ts">
  import { enhance, applyAction } from "$app/forms"
  import type { SubmitFunction } from "@sveltejs/kit"
  import { CheckCircle, ArrowRight, Mail, TrendingUp, Sparkles} from "$lib/icons"

  let errors: { [fieldName: string]: string } = $state({})
  let loading = $state(false)
  let showSuccess = $state(false)
  let email = $state("")

  const benefits = [
    "Weekly insights on web design and marketing that converts",
    "Behind-the-scenes case studies from real projects", 
    "Data-driven strategies that actually work",
    "No fluff, just actionable advice you can use"
  ]

  const handleSubmit: SubmitFunction = () => {
    loading = true
    errors = {}
    return async ({ update, result }) => {
      await update({ reset: false })
      await applyAction(result)
      loading = false
      if (result.type === "success") {
        showSuccess = true
        email = "" // Clear the email field
      } else if (result.type === "failure") {
        errors = result.data?.errors ?? {}
      } else if (result.type === "error") {
        errors = { _: "Something went wrong. Please try again." }
      }
    }
  }
</script>

<svelte:head>
  <title>Newsletter - No Visuals</title>
  <meta name="description" content="Get weekly insights on web design and marketing that converts. Join other business owners who are turning their websites into lead-generating machines." />
</svelte:head>

<section class="mx-auto max-w-4xl px-6 py-20 lg:py-28">
  <div class="text-center space-y-12">
    
    <!-- Header Section -->
    <div class="space-y-8">
      <div class="flex items-center justify-center gap-4">
        <span class="h-px w-12 bg-gradient-to-r from-transparent via-[#7C9885] to-transparent"></span>
        <span class="font-inter text-sm font-medium text-[#7C9885] uppercase tracking-wider">Newsletter</span>
        <span class="h-px w-12 bg-gradient-to-r from-[#7C9885] via-transparent to-transparent"></span>
      </div>
      
      <h1 class="font-syne font-bold text-5xl lg:text-6xl xl:text-7xl leading-[0.9] tracking-tight text-[#2C2C2C]">
        <span class="block">The No Visuals</span>
        <span class="block text-[#7C9885]">Weekly</span>
      </h1>
      
      <p class="text-xl lg:text-2xl font-inter leading-relaxed text-[#2C2C2C] font-light max-w-2xl mx-auto">
        Get weekly insights on web design that converts. Join other business owners who are turning their websites into lead-generating machines.
      </p>
    </div>

    {#if showSuccess}
      <!-- Success State -->
      <div class="max-w-md mx-auto">
        <div class="relative bg-gradient-to-br from-white via-white to-gray-50 rounded-2xl shadow-2xl border border-gray-200/50 overflow-hidden p-8 text-center space-y-6">
          <div class="w-16 h-16 mx-auto rounded-full bg-[#7C9885]/10 flex items-center justify-center">
            <CheckCircle class="w-8 h-8 text-[#7C9885]" />
          </div>
          <div class="space-y-4">
            <h2 class="font-syne text-2xl font-bold text-[#2C2C2C]">Welcome aboard!</h2>
            <p class="text-lg text-[#2C2C2C]/80 leading-relaxed">
              You're now subscribed to The No Visuals Weekly. Check your email for a confirmation message.
            </p>
            <div class="pt-2 text-sm text-[#2C2C2C]/60">
              First issue arrives this Thursday.
            </div>
          </div>
        </div>
      </div>
    {:else}
      <!-- Signup Form -->
      <div class="max-w-md mx-auto">
        <div class="relative bg-gradient-to-br from-white via-white to-gray-50 rounded-2xl shadow-2xl border border-gray-200/50 overflow-hidden">
          
          <!-- Form Header -->
          <div class="px-8 py-6 bg-gradient-to-r from-[#2C2C2C] to-[#3C3C3C] text-white text-center">
            <div class="space-y-2">
              <div class="flex items-center justify-center gap-2">
                <Mail class="w-5 h-5 text-[#7C9885]" />
                <h2 class="font-syne text-xl font-semibold">Join the Weekly</h2>
              </div>
              <p class="text-sm text-white/80">Free • Unsubscribe anytime</p>
            </div>
          </div>

          <!-- Form Content -->
          <div class="p-8 space-y-6">
            <form
              method="POST"
              action="?/subscribe"
              use:enhance={handleSubmit}
              class="space-y-6"
            >
              <div class="space-y-2">
                <label for="email" class="block">
                  <div class="flex items-center gap-2 mb-3">
                    <span class="font-inter text-sm font-medium text-[#2C2C2C]">
                      Your Email Address
                    </span>
                    {#if errors.email}
                      <span class="text-red-500 text-xs ml-auto">{errors.email}</span>
                    {/if}
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    bind:value={email}
                    autocomplete="email"
                    placeholder="you@company.com"
                    class="w-full px-4 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#7C9885]/20 focus:border-[#7C9885] transition-colors duration-200 text-center font-inter {errors.email ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : ''}"
                    required
                  />
                </label>
              </div>

              <!-- Error Message -->
              {#if errors._ || errors.email}
                <div class="p-3 bg-red-50 border border-red-200 rounded-lg text-center">
                  <p class="text-red-600 text-sm">
                    {errors._ || errors.email}
                  </p>
                </div>
              {/if}

              <!-- Submit Button -->
              <button 
                type="submit"
                disabled={loading}
                class="w-full bg-[#7C9885] hover:bg-[#6B8574] disabled:bg-[#7C9885]/50 text-white font-syne font-semibold py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 {loading ? 'cursor-not-allowed' : 'hover:shadow-lg hover:scale-[1.02]'}"
              >
                {#if loading}
                  <div class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Subscribing...
                {:else}
                  Subscribe to The Weekly
                  <ArrowRight class="w-4 h-4" />
                {/if}
              </button>
            </form>
          </div>
        </div>

        <!-- Floating Elements for Visual Depth -->
        <div class="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-[#7C9885]/20 to-[#7C9885]/5 rounded-full blur-xl animate-pulse pointer-events-none"></div>
        <div class="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-500/15 to-purple-500/10 rounded-full blur-xl animate-pulse pointer-events-none" style="animation-delay: 1s;"></div>
      </div>
    {/if}

    <div class="max-w-2xl mx-auto space-y-8 pt-12">
      <h3 class="font-syne text-2xl font-semibold text-[#2C2C2C] text-center">What you'll get:</h3>
      
      <div class="grid grid-cols-1 gap-4">
        {#each benefits as benefit}
          <div class="flex items-start gap-4 p-4 rounded-xl bg-white/60 border border-white/80 hover:bg-white/80 hover:border-[#7C9885]/20 transition-all duration-300">
            <div class="flex-shrink-0 w-6 h-6 rounded-full bg-[#7C9885]/10 flex items-center justify-center mt-0.5">
              <CheckCircle class="w-4 h-4 text-[#7C9885]" />
            </div>
            <p class="text-[#2C2C2C]/80 font-inter leading-relaxed">{benefit}</p>
          </div>
        {/each}
      </div>
    </div>

    <div class="max-w-xl mx-auto space-y-6 pt-8">
      <div class="flex items-center justify-center gap-6 text-[#2C2C2C]/60">
        <div class="flex items-center gap-2">
          <Sparkles class="w-4 h-4" />
          <span class="font-inter text-sm">100+ subscribers</span>
        </div>
        <div class="flex items-center gap-2">
          <TrendingUp class="w-4 h-4" />
          <span class="font-inter text-sm">5-minute read</span>
        </div>
        <div class="flex items-center gap-2">
          <Mail class="w-4 h-4" />
          <span class="font-inter text-sm">Weekly on Thursday</span>
        </div>
      </div>
      
      <p class="text-xs text-[#2C2C2C]/50 leading-relaxed">
        No spam, no sales pitches. Just actionable insights delivered to your inbox every Thursday. 
        Unsubscribe with one click anytime.
      </p>
    </div>
  </div>
</section>

<style>
  .group {
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }
</style>
