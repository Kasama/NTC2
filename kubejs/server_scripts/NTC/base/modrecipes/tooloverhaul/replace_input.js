onEvent('recipes', (event) => {
    //Handle ToolOverhauls
    //Fixing these after tconstruct updates all the time is a pain.. remember /kubejs hand to copy nbt
        //SWORDS
    event.replaceInput({}, 'minecraft:wooden_sword', /*Item.of('tconstruct:sword', {tic_materials: ["tconstruct:wood", "tconstruct:wood", "tconstruct:wood"]})*/
    Item.of('tconstruct:sword', '{tic_multipliers:{"tconstruct:durability":1.1f,"tconstruct:mining_speed":0.5f},tic_stats:{"tconstruct:attack_speed":1.6f,"tconstruct:attack_damage":3.0f,"tconstruct:harvest_level":0.0f,"tconstruct:durability":66.0f,"tconstruct:mining_speed":1.0f},tic_broken:0b,tic_modifiers:[{level:3s,name:"tconstruct:cultivated"},{level:1s,name:"tconstruct:silky_shears"}],tic_materials:["tconstruct:wood","tconstruct:wood","tconstruct:wood"],Damage:0,tic_persistent_data:{abilities:1,upgrades:3}}').weakNBT()
    );
    event.replaceInput({}, 'minecraft:golden_sword', /*Item.of('tconstruct:sword', {tic_materials: ["tconstruct:rose_gold", "tconstruct:rose_gold", "tconstruct:rose_gold"]})*/ 
    Item.of('tconstruct:sword', '{tic_multipliers:{"tconstruct:durability":1.1f,"tconstruct:mining_speed":0.5f},tic_stats:{"tconstruct:attack_speed":2.0f,"tconstruct:attack_damage":4.0f,"tconstruct:harvest_level":2.0f,"tconstruct:durability":115.5f,"tconstruct:mining_speed":6.25f},tic_broken:0b,tic_modifiers:[{level:3s,name:"tconstruct:enhanced"},{level:1s,name:"tconstruct:silky_shears"}],tic_materials:["tconstruct:rose_gold","tconstruct:rose_gold","tconstruct:rose_gold"],Damage:0,tic_volatile_data:{upgrades:3},tic_persistent_data:{abilities:1,upgrades:3}}').weakNBT()
    );
    event.replaceInput({}, 'minecraft:iron_sword', /*Item.of('tconstruct:sword', {tic_materials: ["tconstruct:iron", "tconstruct:iron", "tconstruct:iron"]})*/
    Item.of('tconstruct:sword', '{tic_multipliers:{"tconstruct:durability":1.1f,"tconstruct:mining_speed":0.5f},tic_stats:{"tconstruct:attack_speed":1.6f,"tconstruct:attack_damage":5.0f,"tconstruct:harvest_level":2.0f,"tconstruct:durability":393.25f,"tconstruct:mining_speed":3.0f},tic_broken:0b,tic_modifiers:[{level:3s,name:"tconstruct:sturdy"},{level:1s,name:"tconstruct:silky_shears"}],tic_materials:["tconstruct:iron","tconstruct:iron","tconstruct:iron"],Damage:0,tic_persistent_data:{abilities:1,upgrades:3}}').weakNBT()
    );
    event.replaceInput({}, 'minecraft:diamond_sword', /*Item.of('tconstruct:sword', {tic_materials: ["tconstruct:cobalt", "tconstruct:cobalt", "tconstruct:cobalt"]})*/ 
    Item.of('tconstruct:sword', '{tic_multipliers:{"tconstruct:durability":1.1f,"tconstruct:mining_speed":0.5f},tic_stats:{"tconstruct:attack_speed":2.0328f,"tconstruct:attack_damage":5.25f,"tconstruct:harvest_level":3.0f,"tconstruct:durability":922.9f,"tconstruct:mining_speed":4.7643747f},tic_broken:0b,tic_modifiers:[{level:3s,name:"tconstruct:lightweight"},{level:1s,name:"tconstruct:silky_shears"}],tic_materials:["tconstruct:cobalt","tconstruct:cobalt","tconstruct:cobalt"],Damage:0,tic_persistent_data:{abilities:1,upgrades:3}}').weakNBT()
    );
    event.replaceInput({}, 'minecraft:netherite_sword', /*Item.of('tconstruct:sword', {tic_materials: ["tconstruct:manyullyn","tconstruct:manyullyn","tconstruct:manyullyn"]})*/ 
    Item.of('tconstruct:sword', '{tic_multipliers:{"tconstruct:durability":1.1f,"tconstruct:mining_speed":0.5f},tic_stats:{"tconstruct:attack_speed":1.52f,"tconstruct:attack_damage":8.125f,"tconstruct:harvest_level":4.0f,"tconstruct:durability":1512.5f,"tconstruct:mining_speed":2.925f},tic_broken:0b,tic_modifiers:[{level:3s,name:"tconstruct:insatiable"},{level:1s,name:"tconstruct:silky_shears"}],tic_materials:["tconstruct:manyullyn","tconstruct:manyullyn","tconstruct:manyullyn"],Damage:0,tic_persistent_data:{abilities:1,upgrades:3}}').weakNBT()
    );
        //HOES
    event.replaceInput({}, 'minecraft:diamond_hoe',
    Item.of('tconstruct:kama', '{tic_multipliers:{"tconstruct:attack_damage":0.75f},tic_stats:{"tconstruct:attack_speed":2.2868998f,"tconstruct:mining_speed":9.528749f,"tconstruct:attack_damage":2.4375f,"tconstruct:harvest_level":3.0f,"tconstruct:durability":839.0f},tic_broken:0b,tic_modifiers:[{name:"tconstruct:lightweight",level:3s},{name:"tconstruct:shears",level:1s},{name:"tconstruct:harvest",level:1s},{name:"tconstruct:hoe_transform_hidden",level:1s}],tic_materials:["tconstruct:cobalt","tconstruct:cobalt","tconstruct:cobalt"],Damage:0,tic_persistent_data:{abilities:1,upgrades:3}}').weakNBT()   
    );
    event.replaceInput({}, 'minecraft:iron_hoe', /*Item.of('tconstruct:kama', {tic_materials: ["tconstruct:iron", "tconstruct:iron", "tconstruct:iron"]})*/
    Item.of('tconstruct:kama', '{tic_multipliers:{"tconstruct:attack_damage":0.75f},tic_stats:{"tconstruct:attack_speed":1.8f,"tconstruct:mining_speed":6.0f,"tconstruct:attack_damage":2.25f,"tconstruct:harvest_level":2.0f,"tconstruct:durability":357.5f},tic_broken:0b,tic_modifiers:[{name:"tconstruct:sturdy",level:3s},{name:"tconstruct:shears",level:1s},{name:"tconstruct:harvest",level:1s},{name:"tconstruct:hoe_transform_hidden",level:1s}],tic_materials:["tconstruct:iron","tconstruct:iron","tconstruct:iron"],Damage:0,tic_persistent_data:{abilities:1,upgrades:3}}').weakNBT()
    );
        //PICKS
    event.replaceInput({}, 'minecraft:golden_pickaxe', /*Item.of('tconstruct:pickaxe', {tic_materials: ["tconstruct:rose_gold", "tconstruct:rose_gold", "tconstruct:rose_gold"]})*/
    Item.of('tconstruct:pickaxe', '{tic_multipliers:{},tic_stats:{"tconstruct:attack_speed":1.5f,"tconstruct:mining_speed":12.5f,"tconstruct:attack_damage":1.0f,"tconstruct:harvest_level":2.0f,"tconstruct:durability":105.0f},tic_broken:0b,tic_modifiers:[{name:"tconstruct:piercing",level:1s},{name:"tconstruct:enhanced",level:3s}],tic_materials:["tconstruct:rose_gold","tconstruct:rose_gold","tconstruct:rose_gold"],Damage:0,tic_volatile_data:{upgrades:3},tic_persistent_data:{abilities:1,upgrades:3}}').weakNBT()
    );
    event.replaceInput({}, 'minecraft:iron_pickaxe', /*Item.of('tconstruct:pickaxe', {tic_materials: ["tconstruct:iron", "tconstruct:iron", "tconstruct:iron"]})*/
    Item.of('tconstruct:pickaxe', '{tic_multipliers:{},tic_stats:{"tconstruct:attack_speed":1.2f,"tconstruct:mining_speed":6.0f,"tconstruct:attack_damage":2.0f,"tconstruct:harvest_level":2.0f,"tconstruct:durability":357.5f},tic_broken:0b,tic_modifiers:[{name:"tconstruct:piercing",level:1s},{name:"tconstruct:sturdy",level:3s}],tic_materials:["tconstruct:iron","tconstruct:iron","tconstruct:iron"],Damage:0,tic_persistent_data:{abilities:1,upgrades:3}}').weakNBT()
    );
    event.replaceInput({}, 'minecraft:diamond_pickaxe', /*Item.of('tconstruct:pickaxe', {tic_materials: ["tconstruct:cobalt", "tconstruct:cobalt", "tconstruct:cobalt"]})*/
    Item.of('tconstruct:pickaxe', '{tic_multipliers:{},tic_stats:{"tconstruct:attack_speed":1.5246f,"tconstruct:mining_speed":9.528749f,"tconstruct:attack_damage":2.25f,"tconstruct:harvest_level":3.0f,"tconstruct:durability":839.0f},tic_broken:0b,tic_modifiers:[{name:"tconstruct:lightweight",level:3s},{name:"tconstruct:piercing",level:1s}],tic_materials:["tconstruct:cobalt","tconstruct:cobalt","tconstruct:cobalt"],Damage:0,tic_persistent_data:{abilities:1,upgrades:3}}').weakNBT()
    );
    event.replaceInput({}, 'minecraft:netherite_pickaxe', 
    Item.of('tconstruct:pickaxe', '{tic_multipliers:{},tic_stats:{"tconstruct:attack_speed":1.14f,"tconstruct:mining_speed":5.85f,"tconstruct:attack_damage":4.5f,"tconstruct:harvest_level":4.0f,"tconstruct:durability":1375.0f},tic_broken:0b,tic_modifiers:[{name:"tconstruct:insatiable",level:3s},{name:"tconstruct:piercing",level:1s}],tic_materials:["tconstruct:manyullyn","tconstruct:manyullyn","tconstruct:manyullyn"],Damage:0,tic_persistent_data:{abilities:1,upgrades:3}}').weakNBT()
    );
        //SHOVELS
    event.replaceInput({}, 'minecraft:iron_shovel', /*Item.of('tconstruct:mattock', {tic_broken: 0, tic_materials: ["tconstruct:iron", "tconstruct:iron", "tconstruct:iron"]})*/
    Item.of('tconstruct:mattock', '{tic_multipliers:{},tic_stats:{"tconstruct:attack_speed":1.0f,"tconstruct:mining_speed":6.0f,"tconstruct:attack_damage":3.5f,"tconstruct:harvest_level":2.0f,"tconstruct:durability":357.5f},tic_broken:0b,tic_modifiers:[{name:"tconstruct:knockback",level:1s},{name:"tconstruct:sturdy",level:3s},{name:"tconstruct:shovel_transform_hidden",level:1s}],tic_materials:["tconstruct:iron","tconstruct:iron","tconstruct:iron"],Damage:0,tic_persistent_data:{abilities:1,upgrades:3}}').weakNBT()
    );
    event.replaceInput({}, 'minecraft:diamond_shovel', /*Item.of('tconstruct:mattock', {tic_materials: ["tconstruct:cobalt", "tconstruct:cobalt", "tconstruct:cobalt"]})*/
    Item.of('tconstruct:mattock', '{tic_multipliers:{},tic_stats:{"tconstruct:attack_speed":1.2705f,"tconstruct:mining_speed":9.528749f,"tconstruct:attack_damage":3.75f,"tconstruct:harvest_level":3.0f,"tconstruct:durability":839.0f},tic_broken:0b,tic_modifiers:[{name:"tconstruct:knockback",level:1s},{name:"tconstruct:lightweight",level:3s},{name:"tconstruct:shovel_transform_hidden",level:1s}],tic_materials:["tconstruct:cobalt","tconstruct:cobalt","tconstruct:cobalt"],Damage:0,tic_persistent_data:{abilities:1,upgrades:3}}').weakNBT()
    );
    event.replaceInput({}, 'minecraft:netherite_shovel',
    Item.of('tconstruct:mattock', '{tic_multipliers:{},tic_stats:{"tconstruct:attack_speed":0.95f,"tconstruct:mining_speed":5.85f,"tconstruct:attack_damage":6.25f,"tconstruct:harvest_level":4.0f,"tconstruct:durability":1375.0f},tic_broken:0b,tic_modifiers:[{name:"tconstruct:insatiable",level:3s},{name:"tconstruct:knockback",level:1s},{name:"tconstruct:shovel_transform_hidden",level:1s}],tic_materials:["tconstruct:manyullyn","tconstruct:manyullyn","tconstruct:manyullyn"],Damage:0,tic_persistent_data:{abilities:1,upgrades:3}}').weakNBT()
    );
        //AXES
    event.replaceInput({}, 'minecraft:iron_axe', /*Item.of('tconstruct:hand_axe', {tic_materials: ["tconstruct:iron", "tconstruct:iron", "tconstruct:iron"]})*/
    Item.of('tconstruct:hand_axe', '{tic_multipliers:{},tic_stats:{"tconstruct:attack_speed":0.9f,"tconstruct:mining_speed":6.0f,"tconstruct:attack_damage":8.0f,"tconstruct:harvest_level":2.0f,"tconstruct:durability":357.5f},tic_broken:0b,tic_modifiers:[{name:"tconstruct:sturdy",level:3s},{name:"tconstruct:axe_transform_hidden",level:1s}],tic_materials:["tconstruct:iron","tconstruct:iron","tconstruct:iron"],Damage:0,tic_persistent_data:{abilities:1,upgrades:3}}').weakNBT()
    );
    event.replaceInput({}, 'minecraft:diamond_axe', /*Item.of('tconstruct:hand_axe', {tic_materials: ["tconstruct:cobalt", "tconstruct:cobalt", "tconstruct:cobalt"]})*/
    Item.of('tconstruct:hand_axe', '{tic_multipliers:{},tic_stats:{"tconstruct:attack_speed":1.1434499f,"tconstruct:mining_speed":9.528749f,"tconstruct:attack_damage":8.25f,"tconstruct:harvest_level":3.0f,"tconstruct:durability":839.0f},tic_broken:0b,tic_modifiers:[{name:"tconstruct:lightweight",level:3s},{name:"tconstruct:axe_transform_hidden",level:1s}],tic_materials:["tconstruct:cobalt","tconstruct:cobalt","tconstruct:cobalt"],Damage:0,tic_persistent_data:{abilities:1,upgrades:3}}').weakNBT()
    );

});