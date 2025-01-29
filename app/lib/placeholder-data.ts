const roles = [
	{
		id: '1',
		role_name: 'Controller',
		role_url: '/img/roles/Controller.png',
	},
	{
		id: '2',
		role_name: 'Duelist',
		role_url: '/img/roles/Duelist.png',
	},
	{
		id: '3',
		role_name: 'Initiator',
		role_url: '/img/roles/Initiator.png',
	},
	{
		id: '4',
		role_name: 'Sentinel',
		role_url: '/img/roles/Sentinel.png',
	},
]

const agents = [
	{
		id: '1',
		name: 'Astra',
		role_id: '1',
		agent_url: '/img/agents/Astra.png',
		overview:
			'Astra is an Agent in VALORANT and the fourth Controller to be released.',
		description:
			"Ghanaian Agent Astra harnesses the energies of the cosmos to reshape battlefields to her whim. With full command of her astral form and a talent for deep strategic foresight, she's always eons ahead of her enemy's next move.",
	},
	{
		id: '2',
		name: 'Breach',
		role_id: '3',
		agent_url: '/img/agents/Breach.png',
		overview:
			"Breach is a VALORANT agent to whom walls are no obstacle. Breach's kit is designed to inflict damage and crowd control through walls and terrain, taking people out of cover or aiding his team's peaking. Flashpoint is a fast-acting burst that blinds enemies, while Aftershock does damage while also dazing all players in the area of effect. If that's not enough, Breach's ultimate, Rolling Thunder, is an ability that passes through all terrain in a cone, knocking up and dazing players. Good Breach players will find clever ways to ambush the enemies without even being seen. Teaming up with Sova to learn enemies' positioning is a deadly combination that can catch the enemy team completely off-guard.",
		description:
			'Breach, the bionic Swede, fires powerful, targeted kinetic blasts to aggressively clear a path through enemy ground. The damage and disruption he inflicts ensures no fight is ever fair.',
	},
	{
		id: '3',
		name: 'Brimstone',
		role_id: '1',
		agent_url: '/img/agents/Brim.png',
		overview:
			"Brimstone is a VALORANT agent, specializing in supporting allies and enabling fast site executes. Brimstone is unique in the way he uses the minimap to deploy some of his abilities, making him dangerous even if he's not directly present in the fight. He can deploy smokescreens that block vision, while his other abilities can boost allies' rate of fire and movement speed or create area-of-effect fire fields. The best Brimstone players have excellent utility timing and conservation, in order to fully capitalise off of the devastating impact of his abilities.",
		description:
			"Joining from the USA, Brimstone's orbital arsenal ensures his squad always has the advantage. His ability to deliver utility precisely and from a distance make him an unmatched boots-on-the-ground commander.",
	},
	{
		id: '4',
		name: 'Chamber',
		role_id: '4',
		agent_url: '/img/agents/Chamber.png',
		overview:
			'Chamber is an Agent in VALORANT and the fourth Sentinel to be released.',
		description:
			'Well dressed and well armed, French weapons designer Chamber expels aggressors with deadly precision. He leverages his custom arsenal to hold the line and pick off enemies from afar, with a contingency built for every plan.',
	},
	{
		id: '5',
		name: 'Clove',
		role_id: '1',
		agent_url: '/img/agents/Clove.png',
		overview:
			'Clove is an Agent in VALORANT and the sixth Controller to be released.',
		description:
			'Scottish troublemaker Clove makes mischief for enemies in both the heat of combat and the cold of death. The young immortal keeps foes guessing, even from beyond the grave, their return to the living only ever a moment away.',
	},
	{
		id: '6',
		name: 'Cypher',
		role_id: '4',
		agent_url: '/img/agents/Cypher.png',
		overview:
			"Cypher is a VALORANT agent who is the embodiment of the spy and infiltrator archetype. Cypher relies on ambushing enemies with various traps, which daze, restrain, and slow enemies in their range. Cypher is also skilled in gathering information about the battlefield, using Spycam's to monitor enemy team movements or extracting information from dead enemies to reveal the location of their allies. Skilled Cypher players will have intimate knowledge of VALORANT maps to know the best places to set traps and Spycams, crippling the enemy team while staying hidden in the shadows.",
		description:
			'The Moroccan information broker, Cypher is a one-man surveillance network who keeps tabs on the enemy’s every move. No secret is safe. No maneuver goes unseen. Cypher is always watching.',
	},
	{
		id: '7',
		name: 'Fade',
		role_id: '3',
		agent_url: '/img/agents/Fade.png',
		overview:
			'Fade is an Agent in VALORANT and the fifth Initiator to be released.',
		description:
			'Turkish bounty hunter, Fade, unleashes the power of raw nightmares to seize enemy secrets. Attuned with terror itself, she hunts targets and reveals their deepest fears before crushing them in the dark.',
	},
	{
		id: '8',
		name: 'Harbor',
		role_id: '1',
		agent_url: '/img/agents/Harbor.png',
		overview:
			'Harbor is an Agent in VALORANT and the fifth Controller to be released.',
		description:
			"Hailing from India's coast, Harbor storms the field wielding ancient technology with dominion over water. He unleashes frothing rapids and crushing waves to shield his allies and to pummel those that oppose him.",
	},
	{
		id: '9',
		name: 'Iso',
		role_id: '2',
		agent_url: '/img/agents/Iso.png',
		overview:
			'Iso is an Agent in VALORANT and the seventh Duelist to be released.',
		description:
			'Chinese fixer for hire, Iso falls into a flow state to dismantle the opposition. Reconfiguring ambient energy into bulletproof protection, he advances with focus towards his next duel to the death.',
	},
	{
		id: '10',
		name: 'Jett',
		role_id: '2',
		agent_url: '/img/agents/Jett.png',
		overview:
			"Jett is a VALORANT agent who specializes in mobility and assassinations. Like a true ninja, this South Korean agent can dash short distances to catch-up enemies or escape dangerous situation, and even propel herself upwards to reach highground places and surprise lurking targets who think they're safe up there. The combination of the Cloudburst ability and the Blade Storm ultimate make Jett a close-combat nightmare, as she can execute enemies who won't even realize what hit them.",
		description:
			"Representing her home country of South Korea, Jett's agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish, cutting enemies before they even know what hit them.",
	},
	{
		id: '11',
		name: 'Kay/o',
		role_id: '3',
		agent_url: '/img/agents/Kayo.png',
		overview:
			'KAY/O is an Agent in VALORANT and the fourth Initiator to be released.',
		description:
			"KAY/O is a machine of war built for a single purpose: neutralizing radiants. His power to suppress enemy abilities cripples his opponents' capacity to fight back, securing him and his allies the ultimate edge.",
	},
	{
		id: '12',
		name: 'Killjoy',
		role_id: '4',
		agent_url: '/img/agents/Killjoy.png',
		overview:
			"Killjoy is а VALORANT agent that specializes in crowd control through gadgets, bots, and marvels of engineering. Alarmbot and Nanoswarm allow Killjoy to deploy tools that seek out and damage targets or explode to deal damage from a covert state. Her Turret, on the other hand, can be placed at a critical area on the map, such as Spike plant sites, behind corners, or other strategical positions to deal damage to enemies in its range. Killjoy's ultimate, Lockdown, is another impressive device, which triggers after a period of windup to ensnare enemies caught in its radius, providing powerful, team-wide crowd control. Expert Killjoy players will heavily rely on her abilities as opposed to raw firepower to gain advantage on the map.",
		description:
			"The genius of Germany, Killjoy secures the battlefield with ease using her arsenal of inventions. If the damage from her gear doesn't stop her enemies, her robots debuff will help make short work of them.",
	},
	{
		id: '13',
		name: 'Neon',
		role_id: '2',
		agent_url: '/img/agents/Neon.png',
		overview:
			'Neon is an Agent in VALORANT and the sixth Duelist to be released.',
		description:
			'Filipino Agent, Neon, surges forward at shocking speeds, discharging bursts of bioelectric radiance as fast as her body generates it. She races ahead to catch enemies off guard, then strikes them down quicker than lightning.',
	},
	{
		id: '14',
		name: 'Omen',
		role_id: '1',
		agent_url: '/img/agents/Omen.png',
		overview:
			'Omen is a VALORANT agent who is clouded in mystery and speacializes in covering the battlefield and his enemies in darkness. Two of his abilities, Paranoia and Dark Cover, are ranged attacks that obscure vision and give Omen a huge advantage in duels and teamfights. On top of his crowd controlling skills, Omen has the ability to teleport around the map — either on short distances with Shrouded Step, or globally on the map with his From the Shadows ultimate. Therefore, a team with both Omen and Brimstone becomes incredibly dangerous, as it can deploy damage and crowd control anywhere on the map, seemingly out of nowhere.',
		description:
			'A phantom of a memory, Omen hunts in the shadows. He renders enemies blind, teleports across the field, then lets paranoia take hold as his foe scrambles to learn where he might strike next.',
	},
	{
		id: '15',
		name: 'Phoenix',
		role_id: '2',
		agent_url: '/img/agents/Phoenix.png',
		overview:
			"Phoenix is an offensive VALORANT agent, who specializes in hunting down enemies, while crippling their ability to fire back. The Blaze ability creates walls that blocks vision and deals damage, allowing Phoenix to sneak past defended open areas, while Curveball blinds enemies, even if they're hinding behind corners. In combination, Hot Hands and the Run it Back ultimate make Phoenix a very durable duelist and players who like to play aggressively will really enjoy this agent's gameplay",
		description:
			"Hailing from the U.K., Phoenix's star power shines through in his fighting style, igniting the battlefield with flash and flare. Whether he's got backup or not, he'll rush into a fight on his own terms.",
	},
	{
		id: '16',
		name: 'Raze',
		role_id: '2',
		agent_url: '/img/agents/Raze.png',
		overview:
			"Raze is a VALORANT agent, whose skill kit is centered around mines, grenades, and general explosions. Raze is all about dealing AOE damage to enemies and will become a favorite agent for those players who like chaos and mayhem. Blast Pack and Boom Bot are Raze's main abilities, with which she melts the opposing team. Blast Pack can stick to walls and be detonated on command, while Boom Bot is an auto-lock Bot that chases enemies and explodes if it catches up to them, making it great to putting pressure to opponents while can give a great amount of damage if triggered. Raze's signature ability, Paint Shells is a more direct damage grenade-throw, in which after thrown and explodes, splits into 4 smaller grenades that also deals great damage, making it a great space-maker of a skill. And if someone lives after encountering Raze on the battlefield, the Showstopper ultimate does just that — it ends everyone's life.",
		description:
			'Raze explodes out of Brazil with her big personality and big guns. With her blunt-force-trauma playstyle, she excels at flushing entrenched enemies and clearing tight spaces with a generous dose of “boom”.',
	},
	{
		id: '17',
		name: 'Reyna',
		role_id: '2',
		agent_url: '/img/agents/Reyna.png',
		overview:
			"Reyna is a VALORANT agent with an aggressive, duel-centric playstyle. Reyna's unique mechanic are the so-called Soul Orbs, which drop when she kills an opponent and which, upon consumption, give her various bonuses — from massive healing to invisibility. Reyna's ultimate ability is Empress, which turns her into a rapid-fire death machine, dramatically increasing all her combat stats. Every kill renews Empress' duration, and a skilled Reyna player can wipe away the entire team in one swift offense.",
		description:
			'Forged in the heart of Mexico, Reyna dominates single combat, popping off with each kill she scores. Her capability is only limited by her raw skill, making her highly dependent on performance.',
	},
	{
		id: '18',
		name: 'Sage',
		role_id: '4',
		agent_url: '/img/agents/Sage.png',
		overview:
			"Sage is a VALORANT agent, whose abilities make her a key support in the game. Sage equips various orbs which can slow enemies, heal allies, or erect walls to control the battlefield. Her ultimate, Resurrection, can even bring dead allies back to life, swinging the balance of power in a match in seconds. Sage thrives when she's behind her team, hidden from enemy fire.",
		description:
			'The bastion of China, Sage creates safety for herself and her team wherever she goes. Able to revive fallen friends and stave off aggressive pushes, she provides a calm center to a hellish fight.',
	},
	{
		id: '19',
		name: 'Skye',
		role_id: '3',
		agent_url: '/img/agents/Skye.png',
		overview:
			'Skye is an Agent in VALORANT and the third Initiator to be released.',
		description:
			"Hailing from Australia, Skye and her band of beasts trail-blaze the way through hostile territory. With her creations hampering the enemy, and her power to heal others, the team is strongest and safest by Skye's side.",
	},
	{
		id: '20',
		name: 'Sova',
		role_id: '3',
		agent_url: '/img/agents/Sova.png',
		overview:
			"Sova is a VALORANT agent, who specializes in scouting and reconnaisance. Sova's entire kit is built around finding the enemies and marking them for his allies. Owl Drone and Recon Bolt are a single target and AoE scanners, respectively. Sova's ultimate, Hunter's Fury, is a map-wide damaging ability that also marks enemies it hits. Teams that like to rely on complete information on enemies' movements and positioning will want to have a Sova in their ranks.",
		description:
			"Born from the eternal winter of Russia's tundra, Sova tracks, finds, and eliminates enemies with ruthless efficiency and precision. His custom bow and incredible scouting abilities ensure that even if you run, you cannot hide.",
	},
	{
		id: '21',
		name: 'Tejo',
		role_id: '3',
		agent_url: '/img/agents/Tejo.png',
		overview:
			'Tejo is an Agent in VALORANT and the seventh Initiator to be released.',
		description:
			"A veteran intelligence consultant from Colombia, Tejo's ballistic guidance system pressures the enemy to relinquish their ground - or their lives. His targeted strikes keep opponents off balance and under his heel",
	},
	{
		id: '22',
		name: 'Viper',
		role_id: '1',
		agent_url: '/img/agents/Viper.png',
		overview:
			"Viper is a VALORANT agent who deals with poison and acid, burning down and suffocating her enemies. She uses fuel to activate her powerful abilities Poison Cloud and Toxic Screen to melt passing targets and block vision. The fuel gauge recharges over time, allowing Viper to control areas for extended time. Snakebite ability and Viper's Pit ultimate are also area-of-effect, completing the dangerous skill kit of this US agent.",
		description:
			"The American chemist, Viper deploys an array of poisonous chemical devices to control the battlefield and cripple the enemy's vision. If the toxins don't kill her prey, her mind games surely will.",
	},
	{
		id: '23',
		name: 'Vyse',
		role_id: '4',
		agent_url: '/img/agents/Vyse.png',
		overview:
			'Vyse is an Agent in VALORANT and the sixth Sentinel to be released.',
		description:
			'Metallic mastermind Vyse unleashes liquid metal to isolate, trap, and disarm her enemies. Through cunning and manipulation, she forces all who oppose her to fear the battlefield itself.',
	},
	{
		id: '24',
		name: 'Yoru',
		role_id: '2',
		agent_url: '/img/agents/Yoru.png',
		overview:
			'Yoru is an Agent in VALORANT and the fifth Duelist to be released.',
		description:
			'Japanese native Yoru rips holes straight through reality to infiltrate enemy lines unseen. Using deception and aggression in equal measure, he gets the drop on each target before they know where to look.',
	},
]

const typeOfGuns = [
	{
		id: '1',
		name: 'machine guns',
	},
	{
		id: '2',
		name: 'melee',
	},
	{
		id: '3',
		name: 'rifles',
	},
	{
		id: '4',
		name: 'shotguns',
	},
	{
		id: '5',
		name: 'sidearms',
	},
	{
		id: '6',
		name: 'smgs',
	},
	{
		id: '7',
		name: 'sniper rifles',
	},
]

const guns = [
	{
		id: '1',
		type_of_gun_id: '1',
		name: 'Ares',
		gun_url: '/img/guns/machine guns/Ares.png',
	},
	{
		id: '2',
		type_of_gun_id: '1',
		name: 'Odin',
		gun_url: '/img/guns/machine guns/Odin.png',
	},
	{
		id: '3',
		type_of_gun_id: '2',
		name: 'Melee',
		gun_url: '/img/guns/melee/Melee.png',
	},
	{
		id: '4',
		type_of_gun_id: '3',
		name: 'Bulldog',
		gun_url: '/img/guns/rifles/Bulldog.png',
	},
	{
		id: '5',
		type_of_gun_id: '3',
		name: 'Guardian',
		gun_url: '/img/guns/rifles/Guardian.png',
	},
	{
		id: '6',
		type_of_gun_id: '3',
		name: 'Phantom',
		gun_url: '/img/guns/rifles/Phantom.png',
	},
	{
		id: '7',
		type_of_gun_id: '3',
		name: 'Vandal',
		gun_url: '/img/guns/rifles/Vandal.png',
	},
	{
		id: '8',
		type_of_gun_id: '4',
		name: 'Bucky',
		gun_url: '/img/guns/shotguns/Bucky.png',
	},
	{
		id: '9',
		type_of_gun_id: '4',
		name: 'Judge',
		gun_url: '/img/guns/shotguns/Judge.png',
	},
	{
		id: '10',
		type_of_gun_id: '5',
		name: 'Classic',
		gun_url: '/img/guns/sidearms/Classic.png',
	},
	{
		id: '11',
		type_of_gun_id: '5',
		name: 'Frenzy',
		gun_url: '/img/guns/sidearms/Frenzy.png',
	},
	{
		id: '12',
		type_of_gun_id: '5',
		name: 'Ghost',
		gun_url: '/img/guns/sidearms/Ghost.png',
	},
	{
		id: '13',
		type_of_gun_id: '5',
		name: 'Sheriff',
		gun_url: '/img/guns/sidearms/Sheriff.png',
	},
	{
		id: '14',
		type_of_gun_id: '5',
		name: 'Shorty',
		gun_url: '/img/guns/sidearms/Shorty.png',
	},
	{
		id: '15',
		type_of_gun_id: '6',
		name: 'Spectre',
		gun_url: '/img/guns/smgs/Spectre.png',
	},
	{
		id: '16',
		type_of_gun_id: '6',
		name: 'Stinger',
		gun_url: '/img/guns/smgs/Stinger.png',
	},
	{
		id: '17',
		type_of_gun_id: '7',
		name: 'Marshal',
		gun_url: '/img/guns/sniper rifles/Marshal.png',
	},
	{
		id: '18',
		type_of_gun_id: '7',
		name: 'Operator',
		gun_url: '/img/guns/sniper rifles/Operator.png',
	},
	{
		id: '19',
		type_of_gun_id: '7',
		name: 'Outlaw',
		gun_url: '/img/guns/sniper rifles/Outlaw.png',
	},
]

export { agents, roles, typeOfGuns, guns }
