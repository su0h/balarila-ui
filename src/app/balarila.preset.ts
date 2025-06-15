// src/themes/balarila.preset.ts
import { definePreset } from '@primeng/themes';
import Nora from '@primeng/themes/nora'; // We'll extend Nora as a base

const balarilaPrimaryGreen = '#34B86A'; // The main green for buttons, menubar
const balarilaLightGreen = '#E6F7E9';  // The light green for input backgrounds
const balarilaDarkText = '#333333';   // Dark text color

export const BalarilaPreset = definePreset(Nora, {
    semantic: {
        // --- Primary Color Overrides ---
        primary: {
            // Define the core primary color used across the theme
            color: balarilaPrimaryGreen,
            // You can also define shades if PrimeNG components use them,
            // or let PrimeNG approximate them from the base 'color' if not explicitly set.
            // For closer control, define specific shades based on your primary green.
            // Here, I'm providing an example of how you might map your primary color
            // to the PrimeNG color scale if you want more specific shades.
            // These are approximations; you might need to fine-tune based on your exact design.
            50:  '#E8F5E9', // Very light green
            100: '#C8E6C9',
            200: '#A5D6A7',
            300: '#81C784',
            400: '#66BB6A',
            500: balarilaPrimaryGreen, // This is our main green
            600: '#2E9F5B', // Slightly darker
            700: '#28884E',
            800: '#227143',
            900: '#1B5A38',
            950: '#15482F'
        },
        // --- Highlight Color Overrides ---
        // Used for active states, selected items (e.g., focused input border, selected menu item)
        highlight: {
            background: balarilaPrimaryGreen, // Highlight background matches primary green
            color: '#FFFFFF'                  // White text on highlight background
        },
        // --- Surface Colors Overrides ---
        // Defines the background colors across your application.
        // Nora uses a wide range, we'll override the relevant ones.
        surface: {
            0: '#FFFFFF',          // Pure white for the main background
            50: '#F9F9F9',
            100: '#F0F0F0',
            // ... you can define more shades if your design uses them.
            // For the light green input backgrounds, we might need a specific category or custom token.
        },
        // --- Text Colors Overrides ---
        text: {
            color: balarilaDarkText,        // General dark text
            muted: '#666666'               // Muted text (e.g., secondary labels)
        },
        // --- Border Colors Overrides ---
        border: {
            color: '#DDDDDD'               // General light grey border
        }
        // You can override other semantic tokens like action, form, overlay if needed.
    },
    // --- Custom Tokens (for specific elements not covered by semantic) ---
    // This is where we can define tokens for colors specific to your design,
    // like the background of your input fields if they don't map directly to 'surface' tokens.
    custom: {
        'balarila-input-background': balarilaLightGreen, // For the light green textboxes
        'balarila-header-background': balarilaPrimaryGreen, // For the menubar background
        'balarila-header-text-color': '#FFFFFF' // White text on menubar
    }
});