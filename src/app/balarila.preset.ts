// src/themes/balarila.preset.ts
import { definePreset } from '@primeng/themes';
import Nora from '@primeng/themes/nora';

const balarilaPrimaryGreen = '#34B86A';
const balarilaDarkGreen = '#006937';

export const BalarilaPreset = definePreset(Nora, {
    components: {
        menubar: {
            background: balarilaPrimaryGreen, 
            padding: 0,
            border: {
                radius: 0,
                color: 'none'
            },
            base: {
                item: {
                    padding: '30px', // padding: '30px 10px 30px 10'
                    border: {
                        radius: 0,
                    },
                }
            },
            item: {
                color: 'white',
                focus: {
                    background: 'white',
                    color: balarilaDarkGreen,
                },
                active: {
                    background: 'white',
                }
            },
            submenu: {
                icon: {
                    size: '1000px',
                    color: 'tomato'
                }
            },
            mobile: {
                button: {
                    size: '77px',
                    color: balarilaDarkGreen,
                    border: {
                        radius: 0
                    },
                    focus: {
                        ring: {
                            offset: '600px 0 0 0',
                        }  
                    },
                }
            }
        },

        card: {
            colorScheme: {
                light: {
                    root: {
                        background: balarilaPrimaryGreen
                    }
                }
            }
        }
    }
});