onEvent('recipes', (event) => {
    //https://github.com/CompactMods/CompactCrafting/wiki/Recipe-Specification

    //Also note, can't use Item.of because Count is caps sensitive (Name too)

    const machineShapes = {
        me_controller: [
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ['C', 'C', 'C', 'C', 'C'],
                    ['C', 'Q', 'Q', 'Q', 'C'],
                    ['C', 'Q', 'Q', 'Q', 'C'],
                    ['C', 'Q', 'Q', 'Q', 'C'],
                    ['C', 'C', 'C', 'C', 'C']
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ['C', 'Q', 'Q', 'Q', 'C'],
                    ['Q', 'S', 'S', 'S', 'Q'],
                    ['Q', 'S', 'E', 'S', 'Q'],
                    ['Q', 'S', 'S', 'S', 'Q'],
                    ['C', 'Q', 'Q', 'Q', 'C']
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ['C', 'Q', 'Q', 'Q', 'C'],
                    ['Q', 'S', 'E', 'S', 'Q'],
                    ['Q', 'E', 'F', 'E', 'Q'],
                    ['Q', 'S', 'E', 'S', 'Q'],
                    ['C', 'Q', 'Q', 'Q', 'C']
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ['C', 'Q', 'Q', 'Q', 'C'],
                    ['Q', 'S', 'S', 'S', 'Q'],
                    ['Q', 'S', 'E', 'S', 'Q'],
                    ['Q', 'S', 'S', 'S', 'Q'],
                    ['C', 'Q', 'Q', 'Q', 'C']
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ['C', 'C', 'C', 'C', 'C'],
                    ['C', 'Q', 'Q', 'Q', 'C'],
                    ['C', 'Q', 'Q', 'Q', 'C'],
                    ['C', 'Q', 'Q', 'Q', 'C'],
                    ['C', 'C', 'C', 'C', 'C']
                ]
            }
        ],
        mekanism_steel_casing: [
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ["S", "O", "O", "O", "S"],
                    ["O", "S", "O", "S", "O"],
                    ["O", "O", "S", "O", "O"],
                    ["O", "S", "O", "S", "O"],
                    ["S", "O", "O", "O", "S"]
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ["O", "S", "O", "S", "O"],
                    ["S", "G", "G", "G", "S"],
                    ["O", "G", "G", "G", "O"],
                    ["S", "G", "G", "G", "S"],
                    ["O", "S", "O", "S", "O"]
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ["O", "O", "S", "O", "O"],
                    ["O", "G", "G", "G", "O"],
                    ["S", "G", "G", "G", "S"],
                    ["O", "G", "G", "G", "O"],
                    ["O", "O", "S", "O", "O"]
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ["O", "S", "O", "S", "O"],
                    ["S", "G", "G", "G", "S"],
                    ["O", "G", "G", "G", "O"],
                    ["S", "G", "G", "G", "S"],
                    ["O", "S", "O", "S", "O"]
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ["S", "O", "O", "O", "S"],
                    ["O", "S", "O", "S", "O"],
                    ["O", "O", "S", "O", "O"],
                    ["O", "S", "O", "S", "O"],
                    ["S", "O", "O", "O", "S"]
                ]
            }
        ],
        mysticalagri_machine_frame: [
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ["I", "I", "I", "I"],
                    ["I", "I", "I", "I"],
                    ["I", "I", "I", "I"],
                    ["I", "I", "I", "I"]
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ["I", "I", "I", "I"],
                    ["I", "S", "C", "I"],
                    ["I", "C", "S", "I"],
                    ["I", "I", "I", "I"]
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ["I", "I", "I", "I"],
                    ["I", "C", "S", "I"],
                    ["I", "S", "C", "I"],
                    ["I", "I", "I", "I"]
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ["I", "I", "I", "I"],
                    ["I", "I", "I", "I"],
                    ["I", "I", "I", "I"],
                    ["I", "I", "I", "I"]
                ]
            }
        ],
        pity_machine_frame: [
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ["T", "T", "T", "T"],
                    ["T", "I", "I", "T"],
                    ["T", "I", "I", "T"],
                    ["T", "T", "T", "T"]
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ["S", "S", "S", "S"],
                    ["S", "R", "R", "S"],
                    ["S", "R", "R", "S"],
                    ["S", "S", "S", "S"]
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ["S", "S", "S", "S"],
                    ["S", "R", "R", "S"],
                    ["S", "R", "R", "S"],
                    ["S", "S", "S", "S"]
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ["T", "T", "T", "T"],
                    ["T", "I", "I", "T"],
                    ["T", "I", "I", "T"],
                    ["T", "T", "T", "T"]
                ]
            }
        ],
        rftools_machine_frame: [
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ["S", "S", "S", "S"],
                    ["S", "S", "S", "S"],
                    ["S", "S", "S", "S"],
                    ["S", "S", "S", "S"]
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ["S", "S", "S", "S"],
                    ["S", "I", "C", "S"],
                    ["S", "C", "I", "S"],
                    ["S", "S", "S", "S"]
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ["S", "S", "S", "S"],
                    ["S", "C", "I", "S"],
                    ["S", "I", "C", "S"],
                    ["S", "S", "S", "S"]
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ["S", "S", "S", "S"],
                    ["S", "S", "S", "S"],
                    ["S", "S", "S", "S"],
                    ["S", "S", "S", "S"]
                ]
            }
        ],
        thermal_fluid_cell_frame: [
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ["L", "E", "E", "L"],
                    ["E", "C", "C", "E"],
                    ["E", "C", "C", "E"],
                    ["L", "E", "E", "L"]
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ["E", "C", "C", "E"],
                    ["C", "-", "-", "C"],
                    ["C", "-", "-", "C"],
                    ["E", "C", "C", "E"]
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ["E", "C", "C", "E"],
                    ["C", "-", "-", "C"],
                    ["C", "-", "-", "C"],
                    ["E", "C", "C", "E"]
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ["L", "E", "E", "L"],
                    ["E", "C", "C", "E"],
                    ["E", "C", "C", "E"],
                    ["L", "E", "E", "L"]
                ]
            }
        ],
        thermal_machine_frame: [
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ["I", "I", "I", "I"],
                    ["I", "C", "C", "I"],
                    ["I", "C", "C", "I"],
                    ["I", "I", "I", "I"]
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ["I", "C", "C", "I"],
                    ["C", "-", "-", "C"],
                    ["C", "-", "-", "C"],
                    ["I", "C", "C", "I"]
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ["S", "C", "C", "S"],
                    ["C", "-", "-", "C"],
                    ["C", "-", "-", "C"],
                    ["S", "C", "C", "S"]
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ["S", "S", "S", "S"],
                    ["S", "C", "C", "S"],
                    ["S", "C", "C", "S"],
                    ["S", "S", "S", "S"]
                ]
            }
        ],
        thermal_redstone_flux_frame: [
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ["L", "E", "E", "L"],
                    ["E", "C", "C", "E"],
                    ["E", "C", "C", "E"],
                    ["L", "E", "E", "L"]
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ["E", "C", "C", "E"],
                    ["C", "-", "-", "C"],
                    ["C", "-", "-", "C"],
                    ["E", "C", "C", "E"]
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ["E", "C", "C", "E"],
                    ["C", "-", "-", "C"],
                    ["C", "-", "-", "C"],
                    ["E", "C", "C", "E"]
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ["L", "E", "E", "L"],
                    ["E", "C", "C", "E"],
                    ["E", "C", "C", "E"],
                    ["L", "E", "E", "L"]
                ]
            }
        ],
        seven_by_seven: [
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ['A', 'A', 'A', 'A', 'A', 'A', 'A'],
                    ['A', 'B', 'B', 'B', 'B', 'B', 'A'],
                    ['A', 'B', 'C', 'C', 'C', 'B', 'A'],
                    ['A', 'B', 'C', 'B', 'C', 'B', 'A'],
                    ['A', 'B', 'C', 'C', 'C', 'B', 'A'],
                    ['A', 'B', 'B', 'B', 'B', 'B', 'A'],
                    ['A', 'A', 'A', 'A', 'A', 'A', 'A']
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ['A', 'B', 'B', 'B', 'B', 'B', 'A'],
                    ['B', 'D', 'D', 'D', 'D', 'D', 'B'],
                    ['B', 'D', 'D', 'D', 'D', 'D', 'B'],
                    ['B', 'D', 'D', 'D', 'D', 'D', 'B'],
                    ['B', 'D', 'D', 'D', 'D', 'D', 'B'],
                    ['B', 'D', 'D', 'D', 'D', 'D', 'B'],
                    ['A', 'B', 'B', 'B', 'B', 'B', 'A']
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ['A', 'B', 'C', 'C', 'C', 'B', 'A'],
                    ['B', 'D', 'D', 'D', 'D', 'D', 'B'],
                    ['C', 'D', 'D', 'D', 'D', 'D', 'C'],
                    ['C', 'D', 'D', 'D', 'D', 'D', 'C'],
                    ['C', 'D', 'D', 'D', 'D', 'D', 'C'],
                    ['B', 'D', 'D', 'D', 'D', 'D', 'B'],
                    ['A', 'B', 'C', 'C', 'C', 'B', 'A']
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ['A', 'B', 'C', 'B', 'C', 'B', 'A'],
                    ['B', 'D', 'D', 'D', 'D', 'D', 'B'],
                    ['C', 'D', 'D', 'D', 'D', 'D', 'C'],
                    ['B', 'D', 'D', 'E', 'D', 'D', 'B'],
                    ['C', 'D', 'D', 'D', 'D', 'D', 'C'],
                    ['B', 'D', 'D', 'D', 'D', 'D', 'B'],
                    ['A', 'B', 'C', 'B', 'C', 'B', 'A']
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ['A', 'B', 'C', 'C', 'C', 'B', 'A'],
                    ['B', 'D', 'D', 'D', 'D', 'D', 'B'],
                    ['C', 'D', 'D', 'D', 'D', 'D', 'C'],
                    ['C', 'D', 'D', 'D', 'D', 'D', 'C'],
                    ['C', 'D', 'D', 'D', 'D', 'D', 'C'],
                    ['B', 'D', 'D', 'D', 'D', 'D', 'B'],
                    ['A', 'B', 'C', 'C', 'C', 'B', 'A']
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ['A', 'B', 'B', 'B', 'B', 'B', 'A'],
                    ['B', 'D', 'D', 'D', 'D', 'D', 'B'],
                    ['B', 'D', 'D', 'D', 'D', 'D', 'B'],
                    ['B', 'D', 'D', 'D', 'D', 'D', 'B'],
                    ['B', 'D', 'D', 'D', 'D', 'D', 'B'],
                    ['B', 'D', 'D', 'D', 'D', 'D', 'B'],
                    ['A', 'B', 'B', 'B', 'B', 'B', 'A']
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ['A', 'A', 'A', 'A', 'A', 'A', 'A'],
                    ['A', 'B', 'B', 'B', 'B', 'B', 'A'],
                    ['A', 'B', 'C', 'C', 'C', 'B', 'A'],
                    ['A', 'B', 'C', 'B', 'C', 'B', 'A'],
                    ['A', 'B', 'C', 'C', 'C', 'B', 'A'],
                    ['A', 'B', 'B', 'B', 'B', 'B', 'A'],
                    ['A', 'A', 'A', 'A', 'A', 'A', 'A']
                ]
            }
        ]
    };

    const recipes = [
        {
                //me_controller
                recipeSize: 5,
                layers: machineShapes.me_controller,
                catalyst: {
                    id: 'appliedenergistics2:quartz_vibrant_glass',
                    Count: 1
                },
                components: {
                    'F': {
                        type: 'compactcrafting:block',
                        block: 'emendatusenigmatica:fluix_block'
                    },
                    'S': {
                        type: 'compactcrafting:block',
                        block: 'appliedenergistics2:smooth_sky_stone_block'
                    },
                    'E': {
                        type: 'compactcrafting:block',
                        block: 'appliedenergistics2:energy_acceptor'
                    },
                    'Q': {
                        type: 'compactcrafting:block',
                        block: 'appliedenergistics2:quantum_ring'
                    },
                    'C': {
                        type: 'compactcrafting:block',
                        block: 'extendedcrafting:crystaltine_block'
                    }
                },
                outputs: [{
                    id: 'appliedenergistics2:controller',
                    Count: 1
                }]
        },

        {
            //mekanism_steel_casing
            recipeSize: 5,
            layers: machineShapes.mekanism_steel_casing,
            catalyst: {
                id: 'extendedcrafting:ender_star',
                Count: 1
            },
            components: {
                'S': {
                    type: 'compactcrafting:block',
                    block: 'emendatusenigmatica:steel_block'
                },
                'O': {
                    type: 'compactcrafting:block',
                    block: 'mekanismadditions:black_plastic'
                },
                'G': {
                    type: 'compactcrafting:block',
                    block: 'emendatusenigmatica:osmium_block'
                }
            },
            outputs: [{
                id: 'mekanism:steel_casing',
                Count: 1
            }]
    },

    {
        //mysticalagri_machine_frame
        recipeSize: 4,
        layers: machineShapes.mysticalagri_machine_frame,
        catalyst: {
            id: 'mysticalagriculture:inferium_essence',
            Count: 1
        },
        components: {
            'S': {
                type: 'compactcrafting:block',
                block: 'mysticalagriculture:inferium_block'
            },
            'I': {
                type: 'compactcrafting:block',
                block: 'minecraft:iron_block'
            },
            'C': {
                type: 'compactcrafting:block',
                block: 'mysticalagriculture:prosperity_block'
            }
        },
        outputs: [{
            id: 'mysticalagriculture:machine_frame',
            Count: 1
        }]
    },

    {
        //pity_machine_frame
        recipeSize: 4,
        layers: machineShapes.pity_machine_frame,
        catalyst: {
            id: 'industrialforegoing:plastic',
            Count: 1
        },
        components: {
            'S': {
                type: 'compactcrafting:block',
                block: 'quark:sturdy_stone'
            },
            'T': {
                type: 'compactcrafting:block',
                block: 'immersiveengineering:treated_wood_horizontal'
            },
            'I': {
                type: 'compactcrafting:block',
                block: 'minecraft:iron_block'
            },
            'R': {
                type: 'compactcrafting:block',
                block: 'extendedcrafting:redstone_ingot_block'
            }
        },
        outputs: [{
            id: 'industrialforegoing:machine_frame_pity',
            Count: 1
        }]
    },

    {
        //rftools_machine_frame
        recipeSize: 4,
        layers: machineShapes.rftools_machine_frame,
        catalyst: {
            id: 'emendatusenigmatica:dimensional_gem',
            Count: 1
        },
        components: {
            'S': {
                type: 'compactcrafting:block',
                block: 'mekanismadditions:gray_plastic'
            },
            'I': {
                type: 'compactcrafting:block',
                block: 'emendatusenigmatica:cobalt_block'
            },
            'C': {
                type: 'compactcrafting:block',
                block: 'emendatusenigmatica:dimensional_block'
            }
        },
        outputs: [{
            id: 'rftoolsbase:machine_frame',
            Count: 1
        }]
    },

    {
        //thermal_fluid_cell_frame
        recipeSize: 4,
        layers: machineShapes.thermal_fluid_cell_frame,
        catalyst: {
            id: 'emendatusenigmatica:bronze_gear',
            Count: 1
        },
        components: {
            'E': {
                type: 'compactcrafting:block',
                block: 'emendatusenigmatica:aluminum_block'
            },
            'L': {
                type: 'compactcrafting:block',
                block: 'emendatusenigmatica:copper_block'
            },
            'C': {
                type: 'compactcrafting:block',
                block: 'tconstruct:clear_glass'
            }
        },
        outputs: [{
            id: 'thermal:fluid_cell_frame',
            Count: 1
        }]
    },

    {
        //thermal_machine_frame
        recipeSize: 4,
        layers: machineShapes.thermal_machine_frame,
        catalyst: {
            id: 'tconstruct:clear_glass',
            Count: 1
        },
        components: {
            'S': {
                type: 'compactcrafting:block',
                block: 'emendatusenigmatica:steel_block'
            },
            'I': {
                type: 'compactcrafting:block',
                block: 'minecraft:iron_block'
            },
            'C': {
                type: 'compactcrafting:block',
                block: 'tconstruct:clear_glass'
            }
        },
        outputs: [{
            id: 'thermal:machine_frame',
            Count: 1
        }]
    },

    {
        //thermal_redstone_flux_frame
        recipeSize: 4,
        layers: machineShapes.thermal_redstone_flux_frame,
        catalyst: {
            id: 'emendatusenigmatica:electrum_gear',
            Count: 1
        },
        components: {
            'E': {
                type: 'compactcrafting:block',
                block: 'emendatusenigmatica:electrum_block'
            },
            'L': {
                type: 'compactcrafting:block',
                block: 'emendatusenigmatica:lead_block'
            },
            'C': {
                type: 'compactcrafting:block',
                block: 'tconstruct:clear_glass'
            }
        },
        outputs: [{
            id: 'thermal:energy_cell_frame',
            Count: 1
        }]
    }

    ];

    recipes.forEach((recipe) => {
        event.custom({
            type: 'compactcrafting:miniaturization',
            version: 1,
            recipeSize: recipe.recipeSize,
            layers: recipe.layers,
            catalyst: recipe.catalyst,
            components: recipe.components,
            outputs: recipe.outputs
        });
    });

    modifyShaped(event, 'compactcrafting:field_projector', 1, ['CDC', ' R ', 'SSS'], {
        C: 'numina:component_computer_chip',
        D: 'compactcrafting:projector_dish',
        R: 'compactcrafting:base',
        S: 'tconstruct:slimesteel_ingot'
    })

});
