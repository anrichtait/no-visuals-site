<script lang="ts">
  import { fly } from 'svelte/transition';
  import { X, Menu } from '$lib/icons';
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import ButtonWithIcon from './ButtonWithIcon.svelte';

  let drawerOpen = $state(false);
  let scrolled = $state(false);
  let logoHover = $state(false);
  let currentTheme = $state('light');

  const handleBookCall = () => {
    goto('contact_us');
  };

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/contact_us', label: 'Contact' },
    { href: '/services', label: 'Services' },
  ];

  const detectCurrentTheme = () => {
    if (drawerOpen) return;

    const sections = document.querySelectorAll('section[data-theme]');
    let foundTheme = 'light';

    for (const section of sections) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 0) {
        foundTheme = section.getAttribute('data-theme') || 'light';
        break;
      }
    }

    currentTheme = foundTheme;
  };

  const handleScroll = () => {
    scrolled = window.scrollY > 10;
    detectCurrentTheme();
  };

  onMount(() => {
    detectCurrentTheme();
  });

  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && drawerOpen) {
      drawerOpen = false;
    }
  };

  const closeDrawer = () => {
    drawerOpen = false;
  };

  $effect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  });

  const textColorClass = $derived(currentTheme === 'dark' ? 'text-white' : 'text-gray-900');
  const hoverBgClass = $derived(currentTheme === 'dark' ? 'hover:bg-white/10' : 'hover:bg-slate-100');
  const focusRingClass = $derived(currentTheme === 'dark' ? 'focus:ring-white/30' : 'focus:ring-slate-300');

  const borderColorClass = $derived(currentTheme === 'dark' ? 'border-white/30' : 'border-gray-900/30');
  const hoverBorderColorClass = $derived(currentTheme === 'dark' ? 'hover:border-white/50' : 'hover:border-gray-900/50');
</script>

<svelte:window on:scroll={handleScroll} on:keydown={handleKeydown} />

<nav
  class="fixed top-0 left-0 w-full z-[60] transition-all duration-300 {scrolled ? 'bg-transparent backdrop-blur-md border-none border-gray-200/20 shadow-sm' : 'bg-transparent'} {textColorClass}"
  aria-label="Main navigation"
>
  <div class="relative flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
            <a
                href="/"
                class="flex items-center z-30 group rounded-lg p-1 focus:outline-none focus:ring-2 focus:ring-offset-2 {focusRingClass}"
                on:mouseenter={() => (logoHover = true)}
                on:mouseleave={() => (logoHover = false)}
                on:focus={() => (logoHover = true)}
                on:blur={() => (logoHover = false)}
                aria-label="No Visuals — Home"
            >
                <svg
                    viewBox="0 0 100 80"
                    width="72"
                    height="48"
                    class="h-10 w-auto transition-transform duration-200 group-hover:scale-105 group-focus:scale-105"
                    role="img"
                    aria-hidden="false"
                >
                    <title>No Visuals</title>

                    <path
                        class="logo-path"
                        d="M14 16
                        H78
                        Q86 16 86 24
                        V56
                        Q86 64 78 64
                        H30
                        Q22 64 18 58
                        L18 46
                        L30 30
                        L18 16
                        Q18 16 14 16 Z"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />

                    <path
                        class="logo-accent"
                        d="M30 30 L18 46 L18 58 Q18 58 22 60 H30 Z"
                        fill="currentColor"
                        opacity="0.03"
                    />
                </svg>
            </a>

            <div class="absolute left-1/2 transform -translate-x-1/2 z-40">
                <button
                    class="p-2 rounded-lg border bg-transparent backdrop-blur-md focus:outline-none focus:ring-2 focus-visible:ring-4 transition-all duration-200
                           {borderColorClass} {hoverBorderColorClass} {focusRingClass}"
                    on:click={() => (drawerOpen = !drawerOpen)}
                    aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={drawerOpen}
                    aria-controls="mobile-menu"
                >
                    {#if !drawerOpen}
                        <Menu class="h-6 w-6" />
                    {:else}
                        <X class="h-6 w-6" />
                    {/if}
                </button>
            </div>
            <div class="flex items-center z-30">
                <div class="sm:hidden">
                    <ButtonWithIcon label="Book" size="small" onclick={handleBookCall} />
                </div>
                <div class="hidden sm:block">
                    <ButtonWithIcon label="Book a meeting" onclick={handleBookCall} />
                </div>
            </div>
    </div>

    {#if drawerOpen}
        <div
            class="fixed inset-0 z-[100] backdrop-blur-md bg-black/20"
            on:click={closeDrawer}
            aria-hidden="true"
            in:fly={{ y: 0, duration: 300, opacity: 0 }}
            out:fly={{ y: 0, duration: 200, opacity: 0 }}
        ></div>

        <div
            id="mobile-menu"
            class="fixed left-0 right-0 top-16 z-[200]"
            in:fly={{ y: -8, duration: 220, delay: 100 }}
            out:fly={{ y: -6, duration: 160 }}
            role="menu"
            aria-label="Main full-width menu"
        >
            <div class="backdrop-blur-md">
                <div class="max-w-7xl mx-auto px-6 py-8">
                    <ul class="flex flex-col items-center space-y-8">
                        {#each links as link, index}
                            <li>
                                <a
                                    href={link.href}
                                    class="block text-5xl md:text-6xl font-extrabold text-center leading-snug py-2 px-4 text-gray-900 hover:underline hover:decoration-2 hover:decoration-gray-800/60 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded transition-all duration-300"
                                    on:click={closeDrawer}
                                    role="menuitem"
                                    tabindex="0"
                                >
                                    {link.label}
                                </a>
                            </li>
                        {/each}
                    </ul>
                </div>
            </div>
        </div>
    {/if}
</nav>

<style>
  :global(.logo-path) {
    stroke-dasharray: 420;
    stroke-dashoffset: 0;
    transition: none;
  }

  @keyframes logo-draw {
    from { stroke-dashoffset: 420; }
    to   { stroke-dashoffset: 0; }
  }

  @keyframes accent-fade {
    from { opacity: 0.03; transform: translateY(-6px) scale(0.95); }
    to   { opacity: 0.06; transform: translateY(0) scale(1); }
  }

  :global(.group:hover) .logo-path,
  :global(.group:focus-visible) .logo-path,
  :global(.group:focus-within) .logo-path {
    animation: logo-draw 2500ms cubic-bezier(.2,.9,.2,1) forwards;
  }

  :global(.group:hover) .logo-accent,
  :global(.group:focus-visible) .logo-accent,
  :global(.group:focus-within) .logo-accent {
    animation: accent-fade 300ms ease forwards;
  }
</style>
