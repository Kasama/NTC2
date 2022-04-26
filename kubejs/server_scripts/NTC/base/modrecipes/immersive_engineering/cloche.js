onEvent('recipes', e => {
  //#region FUNCTIONS
  function tier(types, time, soil, rCount) {
    types.forEach(type => {
      e.recipes.immersiveengineering.cloche(Item.of(`mysticalagriculture:${type}_essence`, rCount), `mysticalagriculture:${type}_seeds`, soil, `mysticalagriculture:${type}_crop`).time(time)
    })
  }
  function inf(rCount, time, soil) {
    tier([`inferium`], time, soil, rCount)
  }
  function regular(results, seed, crop) {
    e.recipes.immersiveengineering.cloche(results, Item.of(seed), `minecraft:dirt`, crop).time(600)
  }
  //#endregion

  //#region CROPS
  //Tier 1 Crops
  tier([
    `air`,
    `earth`,
    `fire`,
    `water`,
    `dirt`,
    `wood`,
    `ice`,
    `stone`
  ], 1000, `#misctags:farmland/tier1`, 2)
  //Tier 2 Crops
  tier([
    `aluminum`,
    `chicken`,
    `coal`,
    `copper`,
    `coral`,
    `cow`,
    `dye`,
    `fish`,
    `honey`,
    `nature`,
    `nether`,
    `pig`,
    `rubber`,
    `saltpeter`,
    `sheep`,
    `silicon`,
    `slime`,
    `squid`,
    `sulfur`,
    `turtle`,
    `sky_stone`,
    `basalz`,
    `blizz`,
    `blitz`,
    `apatite`
  ], 1750, `#misctags:farmland/tier2`, 2)
  //Tier 3 Crops
  tier([
    `brass`,
    `bronze`,
    `certus_quartz`,
    `creeper`,
    `ender_biotite`,
    `glowstone`,
    `graphite`,
    `iron`,
    `lead`,
    `nether_quartz`,
    `obsidian`,
    `prismarine`,
    `rabbit`,
    `redstone`,
    `silver`,
    `skeleton`,
    `spider`,
    `tin`,
    `zinc`,
    `zombie`,
    `lumium`,
    `fluorite`,
    `aquamarine`,
    `signalum`,
    `pig_iron`,
    `slimesteel`,
    `tinkers_bronze`
  ], 2500, `#misctags:farmland/tier3`, 2)
  //Tier 4 Crops
  tier([
    `blaze`,
    `chrome`,
    `constantan`,
    `electrum`,
    `end`,
    `enderman`,
    `experience`,
    `fluix`,
    `ghast`,
    `gold`,
    `invar`,
    `lapis_lazuli`,
    `mithril`,
    `nickel`,
    `osmium`,
    `refined_glowstone`,
    `refined_obsidian`,
    `steel`,
    `titanium`,
    `tungsten`,
    `compressed_iron`,
    `hop_graphite`,
    `rose_gold`,
    `cobalt`
  ], 3250, `#misctags:farmland/tier4`, 2)
  //Tier 5 Crops
  tier([
    `diamond`,
    `emerald`,
    `netherite`,
    `wither_skeleton`,
    `platinum`,
    `uranium`,
    `enderium`,
    `manyullyn`,
    `queens_slime`,
    `hepatizon`
  ], 4000, `#misctags:farmland/tier5`, 2)
  //Tier 6 Crops
  tier([
    `dragon_egg`,
    `nether_star`
  ], 4750, `#misctags:farmland/tier6`, 2)
  /*
  //Magical Tier
  tier([
    `test`
  ], 5500, `thermal:phytosoil`, 2)
  */

  //Regular crops
  /*
  regular([`forbidden_arcanus:arcane_gold_nugget`, `forbidden_arcanus:golden_orchid_seeds`], `forbidden_arcanus:golden_orchid_seeds`, `forbidden_arcanus:golden_orchid`)
  regular([Item.of(`silentgear:flax_fiber`, 2), `silentgear:flax_seeds`], `silentgear:flax_seeds`, `silentgear:flax_plant`)
  regular([Item.of(`byg:blueberries`, 2)], `byg:blueberries`, `byg:blueberry_bush`)
  */
  //Inferium
  inf(1, 1000, 'minecraft:dirt')
  inf(2, 1750, 'mysticalagriculture:inferium_farmland')
  inf(3, 2500, 'mysticalagriculture:prudentium_farmland')
  inf(4, 3250, 'mysticalagriculture:tertium_farmland')
  inf(5, 4000, 'mysticalagriculture:imperium_farmland')
  inf(6, 4750, 'mysticalagriculture:supremium_farmland')
  inf(7, 5500, 'mysticalagradditions:insanium_farmland')
  //#endregion
})
