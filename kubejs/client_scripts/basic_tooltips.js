onEvent('item.tooltip', tooltip => {

    tooltip.add(/compressium:.+1/,'9 blocks')
    tooltip.add(/compressium:.+2/,'81 blocks')
    tooltip.add(/compressium:.+3/,'729 blocks')
    tooltip.add(/compressium:.+4/,'6,561 blocks')
    tooltip.add(/compressium:.+5/,'59,049 blocks')
    tooltip.add(/compressium:.+6/,'531,441 blocks')
    tooltip.add(/compressium:.+7/,'4,782,969 blocks')
    tooltip.add(/compressium:.+8/,'43,046,721 blocks')
    tooltip.add(/compressium:.+9/,'387,420,489 blocks')
    tooltip.add('appliedenergistics2:facade', 'Using the same recipe, you can make a facade out of almost any block')
    tooltip.add('tconstruct:part_builder', 'Can be made out of any planks')
    tooltip.add('tconstruct:tinker_station', 'Can be made out of any planks')
    tooltip.add('tconstruct:crafting_station', 'Can be made out of any log')
    tooltip.add(['tconstruct:tinkers_anvil','tconstruct:scorched_anvil'], 'Can be made out of any alloy block')
    tooltip.add(/appliedenergistics2:white_(smart|covered|glass|covered_dense|smart_dense)_cable/, 'Come in all colors')
    tooltip.add('immersiveengineering:metal_press',["1x Piston","2x Steel Scaffolding","1x Redstone Engineering Block","1x Heavy Engineering Block","2x Conveyor Belt"])
    tooltip.add('immersiveengineering:assembler',["6x Steel Scaffolding","2x Redstone Engineering Block","2x Light Engineering Block","9x Iron Sheetmetal","6x Iron Sheetmetal Slab","2x Conveyor Belt"])
    tooltip.add('immersiveengineering:squeezer',["1x Piston","6x Steel Scaffolding","2x Light Engineering Block","1x Redstone Engineering Block","3x Steel Fence","2x Fluid Pipe","4x Wooden Barrel"])
    tooltip.add('immersiveengineering:arc_furnace',["08x Steel Sheetmetal","06x Block of Steel","14x Steel Sheetmetal Slab","05x Steel Scaffolding","05x Heavy Engineering Block","01x Cauldron","10x Light Engineering Block","27x Reinforced Blast Brick"])
    tooltip.add('immersiveengineering:silo',["04x Treated Wood Fence","50x Iron Sheetmetal"])
    tooltip.add('immersiveengineering:crusher',["10x Steel Scaffolding","10x Light Engineering Block","01x Redstone Engineering Block","08x Steel Fence","09x Hopper"])
    tooltip.add('immersiveengineering:fermenter',["6x Steel Scaffolding","2x Light Engineering Block","4x Cauldron","1x Redstone Engineering Block","4x Iron Sheetmetal","2x Fluid Pipe"])
    tooltip.add('immersiveengineering:mixer',["5x Steel Scaffolding","4x Light Engineering Block","4x Iron Sheetmetal","1x Redstone Engineering Block","1x Steel Fence","3x Fluid Pipe"])
    tooltip.add('immersiveengineering:tank',["04x Treated Wood Fence","34x Iron Sheetmetal"])
    tooltip.add('immersiveengineering:sawmill',["8x Steel Scaffolding","6x Light Engineering Block","4x Iron Sheetmetal","2x Heavy Engineering Block","1x Redstone Engineering Block","4x Conveyor Belt"])
    tooltip.add('immersiveengineering:refinery',["08x Steel Scaffolding","02x Light Engineering Block","02x Heavy Engineering Block","16x Iron Sheetmetal","01x Redstone Engineering Block","05x Fluid Pipe"])
    tooltip.add('immersiveengineering:bottling_machine',["2x Iron Sheetmetal","3x Steel Scaffolding","1x Redstone Engineering Block","2x Light Engineering Block,","3x Conveyor Belt","Fluid Pump"])
    tooltip.add('immersiveengineering:lightning_rod',["4x Steel Scaffolding","3x High-Voltage Coil Block","4x Treated Wood Fence","4x Light Engineering Block","8x Copper Coil Block","4x HV Capacitor"])
    tooltip.add('immersiveengineering:diesel_generator',["09x Radiator Block","06x Steel Scaffolding","04x Generator Block","13x Heavy Engineering Block","01x Redstone Engineering Block","05x Fluid Pipe"])
    tooltip.add('immersiveengineering:excavator',["06x Steel Scaffolding","16x Steel Sheetmetal","03x Radiator Block","09x Light Engineering Block","01x Redstone Engineering Block","04x Heavy Engineering Block","09x Block of Steel (for wheel)","20x Steel Scaffolding (for wheel)"])
    tooltip.add('immersiveengineering:auto_workbench',["5x Steel Scaffolding","4x Light Engineering Block","1x Redstone Engineering Block","2x Heavy Engineering Block","2x Treated Wood Slab","4x Conveyor Belt"])
    tooltip.add('immersivepetroleum:pumpjack',["11x Steel Scaffolding","02x Light Engineering Block","06x Treated Wood Fence","01x Redstone Engineering Block","02x Heavy engineering Block","02x Block of Steel","04x Steel Sheetmetal","04x Fluid Pipe"])
    tooltip.add('immersivepetroleum:distillationtower',["25x Steel Scaffolding","04x Heavy Engineering Block","01x Redstone Engineering Block","60x Iron Sheetmetal","30x Steel Scaffolding Slab","17x Fluid Pipe"])

    tooltip.add(/minecraft:(wooden|stone|iron|golden|diamond|netherite)_(sword|shovel|(pick)?axe|hoe)/, [
        Text.red("1 Durability. This item is for crafting only!"),
    ]);

    tooltip.add('@itemfilters',['For pack dev use only!','Players have no reason to make these'])

    tooltip.add('ceramics:clay_plate',['Can be used to create Small Plate Casts'])

    tooltip.add('ceramics:unfired_clay_plate',['Can be used to create Small Plate Casts after fired in a furnace'])

    tooltip.add('ftb-power-pots:power_pot_mk1',['Items Per Output: 16'])
    tooltip.add('ftb-power-pots:power_pot_mk2',['Items Per Output: 32'])
    tooltip.add('ftb-power-pots:power_pot_mk3',['Items Per Output: 48'])
    tooltip.add('ftb-power-pots:power_pot_mk4',['Items Per Output: 64'])

    tooltip.add('watercan:watercan_wood',['Radius: 1, Capacity: 1B, FlowerChance: 1x'])
    tooltip.add('watercan:watercan_stone',['Radius: 3x3, Capacity: 2B, FlowerChance: 2x'])
    tooltip.add('watercan:watercan_iron',['Radius: 3x3, Capacity: 4B, FlowerChance: 2x'])
    tooltip.add('watercan:watercan_gold',['Radius: 3x3, Capacity: 4B, FlowerChance: 50x'])
    tooltip.add('watercan:watercan_diamond',['Radius: 5x5, Capacity: Infinite, FlowerChance: 3x'])

    tooltip.add('minecraft:mushroom_stew',['Regeneration II'])
    tooltip.add('minecraft:rabbit_stew',['Jump Boost II'])
    tooltip.add('minecraft:beetroot_soup',['Health Boost'])
    tooltip.add('minecraft:cookie',['Speed'])
    tooltip.add('minecraft:pumpkin_pie',['Haste'])
    tooltip.add('minecraft:pufferfish',['Water Breathing'])
    tooltip.add('minecraft:honey_bottle',['Instant Health'])
    tooltip.add('minecraft:dried_kelp',['Clears Blindness, Nausea and Poison'])
    tooltip.add('minecraft:cake',['Speed II'])

    tooltip.add('miniutilities:unstable_ingot',[ Text.green('This WILL kill you, blow up, and lose all your crafting materials to make this if you hold this too long') ])
})