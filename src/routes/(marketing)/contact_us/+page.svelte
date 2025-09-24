<script lang="ts">
  import { enhance, applyAction } from "$app/forms"
  import type { SubmitFunction } from "@sveltejs/kit"
  import type { FullAutoFill } from "svelte/elements"
  import { CheckCircle, Sparkles, ArrowRight, Calendar, TrendingUp } from "$lib/icons"

  let errors: { [fieldName: string]: string } = $state({})
  let loading = $state(false)
  let showSuccess = $state(false)

  interface FormField {
    id: string
    label: string
    inputType: string
    autocomplete: FullAutoFill
    placeholder: string
    required?: boolean
  }

  const formFields: FormField[] = [
    {
      id: "first_name",
      label: "First Name",
      inputType: "text",
      autocomplete: "given-name",
      placeholder: "John",
      required: true
    },
    {
      id: "last_name",
      label: "Last Name",
      inputType: "text",
      autocomplete: "family-name",
      placeholder: "Smith",
      required: true
    },
    {
      id: "email",
      label: "Business Email",
      inputType: "email",
      autocomplete: "email",
      placeholder: "john@company.com",
      required: true
    },
    {
      id: "company_name",
      label: "Company Name",
      inputType: "text",
      autocomplete: "organization",
      placeholder: "Your Company Inc.",
      required: false
    },
    {
      id: "phone",
      label: "Phone Number",
      inputType: "tel",
      autocomplete: "tel",
      placeholder: "(555) 123-4567",
      required: false
    },
    {
      id: "message",
      label: "Project Details",
      inputType: "textarea",
      autocomplete: "off",
      placeholder: "Tell us about your project goals, timeline, and any specific challenges you're facing...",
      required: false
    },
  ]

  const benefits = [
    {
      icon: Sparkles,
      title: "Strategic Consultation",
      description: "Get expert guidance on maximizing your web presence ROI"
    },
    {
      icon: TrendingUp,
      title: "Performance Analysis",
      description: "Detailed review of your current digital marketing effectiveness"
    },
    {
      icon: Calendar,
      title: "Custom Strategy",
      description: "Tailored approach designed specifically for your business goals"
    }
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
      } else if (result.type === "failure") {
        errors = result.data?.errors ?? {}
      } else if (result.type === "error") {
        errors = { _: "An error occurred. Please check inputs and try again." }
      }
    }
  }
</script>

<svelte:head>
  <title>Get Started - No Visuals</title>
  <meta name="description" content="Ready to transform your web presence? Get a free consultation and discover how the No Visuals approach can drive real business results." />
</svelte:head>

<section class="mx-auto max-w-7xl px-6 py-20 lg:py-28">
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">

    <div class="flex flex-col justify-start space-y-8">

      <div class="space-y-6">
        <div class="flex items-center gap-4">
          <span class="h-px w-12 bg-gradient-to-r from-[#7C9885] to-transparent"></span>
          <span class="font-inter text-sm font-medium text-[#7C9885] uppercase tracking-wider">Ready to Start?</span>
        </div>

        <h1 class="font-syne font-bold text-5xl lg:text-6xl xl:text-7xl leading-[0.9] tracking-tight text-[#2C2C2C]">
          <span class="block">Transform Your</span>
          <span class="block text-[#7C9885]">Web Presence</span>
        </h1>
      </div>

      <div class="space-y-6">
        <p class="text-xl lg:text-2xl font-inter leading-relaxed text-[#2C2C2C] font-light">
          Get a free consultation and discover how the No Visuals approach can drive real business results for your company.
        </p>

        <p class="text-lg leading-relaxed font-inter text-[#2C2C2C]/80">
          Our team will analyze your current digital presence, identify untapped opportunities, and show you exactly how to turn your website into a lead-generating machine with full data ownership.
        </p>
      </div>

      <div class="space-y-6 pt-4">
        <h2 class="font-syne text-2xl font-semibold text-[#2C2C2C] mb-4">What You'll Get:</h2>
        <div class="space-y-4">
          {#each benefits as benefit}
            <div class="flex items-start gap-4 p-6 rounded-xl bg-white/60 border border-white/80 hover:bg-white/80 hover:border-[#7C9885]/20 transition-all duration-300 group">
              <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-[#7C9885]/10 flex items-center justify-center group-hover:bg-[#7C9885]/20 transition-colors duration-300">
                <svelte:component this={benefit.icon} class="w-5 h-5 text-[#7C9885]" />
              </div>
              <div>
                <h3 class="font-syne text-lg font-semibold text-[#2C2C2C] mb-2">{benefit.title}</h3>
                <p class="text-sm text-[#2C2C2C]/70 leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          {/each}
        </div>
      </div>

      <div class="pt-6 space-y-4">
        <div class="flex items-center gap-3 text-[#2C2C2C]/70">
          <CheckCircle class="w-5 h-5 text-[#7C9885]" />
          <span class="font-inter text-sm">Free consultation with no commitment</span>
        </div>
        <div class="flex items-center gap-3 text-[#2C2C2C]/70">
          <CheckCircle class="w-5 h-5 text-[#7C9885]" />
          <span class="font-inter text-sm">Typically respond within 2 business hours</span>
        </div>
        <div class="flex items-center gap-3 text-[#2C2C2C]/70">
          <CheckCircle class="w-5 h-5 text-[#7C9885]" />
          <span class="font-inter text-sm">Your data stays private and secure</span>
        </div>
      </div>
    </div>

    <div class="flex flex-col justify-start">
      {#if showSuccess}
        <div class="relative bg-gradient-to-br from-white via-white to-gray-50 rounded-2xl shadow-2xl border border-gray-200/50 overflow-hidden">
          <div class="px-8 py-10 text-center space-y-6">
            <div class="w-16 h-16 mx-auto rounded-full bg-[#7C9885]/10 flex items-center justify-center">
              <CheckCircle class="w-8 h-8 text-[#7C9885]" />
            </div>
            <div class="space-y-4">
              <h2 class="font-syne text-2xl font-bold text-[#2C2C2C]">Thank You!</h2>
              <p class="text-lg text-[#2C2C2C]/80 leading-relaxed">
                We've received your information and will be in touch within 2 business hours to schedule your free consultation.
              </p>
              <div class="pt-4 text-sm text-[#2C2C2C]/60">
                Check your email for a confirmation and next steps.
              </div>
            </div>
          </div>
        </div>
      {:else}
        <div class="relative bg-gradient-to-br from-white via-white to-gray-50 rounded-2xl shadow-2xl border border-gray-200/50 overflow-hidden">

          <div class="px-8 py-6 bg-gradient-to-r from-[#2C2C2C] to-[#3C3C3C] text-white">
            <div class="flex items-center justify-between">
              <div class="space-y-1">
                <h2 class="font-syne text-xl font-semibold">Get Started Today</h2>
                <p class="text-sm text-white/80">Free consultation • No obligation</p>
              </div>
              <div class="text-xs text-green-400 flex items-center gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
                Secure Form
              </div>
            </div>
          </div>

          <div class="p-8">
            <form
              class="space-y-6"
              method="POST"
              action="?/submitContactUs"
              use:enhance={handleSubmit}
            >
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {#each formFields.slice(0, 2) as field}
                  <div class="space-y-2">
                    <label for={field.id} class="block">
                      <div class="flex items-center gap-2 mb-2">
                        <span class="font-inter text-sm font-medium text-[#2C2C2C]">
                          {field.label}{#if field.required}<span class="text-[#7C9885] ml-1">*</span>{/if}
                        </span>
                        {#if errors[field.id]}
                          <span class="text-red-500 text-xs ml-auto">{errors[field.id]}</span>
                        {/if}
                      </div>
                      <input
                        id={field.id}
                        name={field.id}
                        type={field.inputType}
                        autocomplete={field.autocomplete}
                        placeholder={field.placeholder}
                        class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#7C9885]/20 focus:border-[#7C9885] transition-colors duration-200 {errors[field.id] ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : ''}"
                        required={field.required}
                      />
                    </label>
                  </div>
                {/each}
              </div>

              {#each formFields.slice(2) as field}
                <div class="space-y-2">
                  <label for={field.id} class="block">
                    <div class="flex items-center gap-2 mb-2">
                      <span class="font-inter text-sm font-medium text-[#2C2C2C]">
                        {field.label}{#if field.required}<span class="text-[#7C9885] ml-1">*</span>{/if}
                      </span>
                      {#if errors[field.id]}
                        <span class="text-red-500 text-xs ml-auto">{errors[field.id]}</span>
                      {/if}
                    </div>
                    {#if field.inputType === "textarea"}
                      <textarea
                        id={field.id}
                        name={field.id}
                        autocomplete={field.autocomplete}
                        placeholder={field.placeholder}
                        rows={4}
                        class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#7C9885]/20 focus:border-[#7C9885] transition-colors duration-200 resize-none {errors[field.id] ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : ''}"
                      ></textarea>
                    {:else}
                      <input
                        id={field.id}
                        name={field.id}
                        type={field.inputType}
                        autocomplete={field.autocomplete}
                        placeholder={field.placeholder}
                        class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#7C9885]/20 focus:border-[#7C9885] transition-colors duration-200 {errors[field.id] ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : ''}"
                        required={field.required}
                      />
                    {/if}
                  </label>
                </div>
              {/each}

              {#if Object.keys(errors).length > 0}
                <div class="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p class="text-red-600 text-sm font-medium">
                    Please correct the errors above and try again.
                  </p>
                </div>
              {/if}

              <button
                type="submit"
                disabled={loading}
                class="w-full bg-[#7C9885] hover:bg-[#6B8574] disabled:bg-[#7C9885]/50 text-white font-syne font-semibold py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 {loading ? 'cursor-not-allowed' : 'hover:shadow-lg hover:scale-[1.02]'}"
              >
                {#if loading}
                  <div class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Submitting...
                {:else}
                  Get Your Free Consultation
                  <ArrowRight class="w-4 h-4" />
                {/if}
              </button>

              <p class="text-xs text-[#2C2C2C]/60 text-center leading-relaxed">
                By submitting this form, you agree to receive communications from No Visuals.
                We respect your privacy and will never share your information with third parties.
              </p>
            </form>
          </div>
        </div>

        <div class="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-[#7C9885]/20 to-[#7C9885]/5 rounded-full blur-xl animate-pulse pointer-events-none"></div>
        <div class="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-500/15 to-purple-500/10 rounded-full blur-xl animate-pulse pointer-events-none" style="animation-delay: 1s;"></div>
      {/if}
    </div>
  </div>
</section>

<style>
  /* Custom styles for enhanced form interactions */
  .group {
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }
</style>
