<script lang="ts">
import CircleArrow from '$lib/components/icons/CircleArrow.svelte';
import { onMount } from 'svelte';

  interface Props {
    label?: string;
    ariaLabel?: string;
    disabled?: boolean;
    size?: 'normal' | 'small';
    onclick?: () => void;
  }

  let { label = "Book a meeting", ariaLabel, disabled = false, size = 'normal', onclick }: Props = $props();

  let iconActive = $state(false);
  let hoverTimeout: ReturnType<typeof setTimeout> | null = null;
  let currentTheme = $state('dark'); // default to dark since it's in hero section

  const detectCurrentTheme = () => {
    const sections = document.querySelectorAll('section[data-theme]');
    let foundTheme = 'dark';

    for (const section of sections) {
      const rect = section.getBoundingClientRect();
      // Check if section is currently visible in viewport (particularly at the top)
      if (rect.top <= 100 && rect.bottom >= 0) {
        foundTheme = section.getAttribute('data-theme') || 'dark';
        break;
      }
    }

    currentTheme = foundTheme;
  };

  const handleScroll = () => {
    detectCurrentTheme();
  };

  // Run theme detection on mount
  onMount(() => {
    detectCurrentTheme();
  });

  function triggerIconPulse() {
    iconActive = true;
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
    hoverTimeout = setTimeout(() => {
      iconActive = false;
      hoverTimeout = null;
    }, 500);
  }

  function handlePointerEnter() {
    triggerIconPulse();
  }

  function handlePointerLeave() {
    // optional: we allow the timed stop to control end-of-animation
    // but clear if you want immediate stop:
    // if (hoverTimeout) { clearTimeout(hoverTimeout); iconActive = false; hoverTimeout = null; }
  }

  // Compute colors based on current theme - matching NavBar logic
  const textColorClass = $derived(currentTheme === 'dark' ? 'text-white' : 'text-gray-900');
  const borderColorClass = $derived(currentTheme === 'dark' ? 'border-white/30' : 'border-gray-900/30');
  const hoverBorderColorClass = $derived(currentTheme === 'dark' ? 'hover:border-white/50' : 'hover:border-gray-900/50');
  const focusRingClass = $derived(currentTheme === 'dark' ? 'focus-visible:ring-white/30' : 'focus-visible:ring-gray-300');
</script>

<svelte:window on:scroll={handleScroll} />

<button
  type="button"
  class="h-12 inline-flex items-center justify-center gap-3 px-5 rounded-[14px] border min-w-[96px] text-lg leading-none select-none
         bg-transparent backdrop-blur-md
         transition-all duration-200 ease-in-out
         focus:outline-none focus-visible:ring-4
         disabled:opacity-50 disabled:cursor-not-allowed
         {textColorClass} {borderColorClass} {hoverBorderColorClass} {focusRingClass}"
  onpointerenter={handlePointerEnter}
  onpointerleave={handlePointerLeave}
  onfocusin={handlePointerEnter}
  onfocusout={() => { /* leave it to timeout */ }}
  onclick={onclick}
  {disabled}
  aria-label={ariaLabel ?? label}
>
  <span class="whitespace-nowrap">{label}</span>

  <CircleArrow size={20} class="flex-none w-5 h-5" isActive={iconActive} />
</button>
