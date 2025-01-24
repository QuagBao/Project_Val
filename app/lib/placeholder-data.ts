const roles = [
	{
		id: '1',
		role_name: 'Controller',
		image_url: '/img/roles/Controller.png',
	},
	{
		id: '2',
		role_name: 'Duelist',
		image_url: '/img/roles/Duelist.png',
	},
	{
		id: '3',
		role_name: 'Initiator',
		image_url: '/img/roles/Initiator.png',
	},
	{
		id: '4',
		role_name: 'Sentinel',
		image_url: '/img/roles/Sentinel.png',
	},
]

const agents = [
	{
		id: '1',
		name: 'Astra',
		image_url: '/img/agents/Astra.png',
	},
	{
		id: '2',
		name: 'Breach',
		image_url: '/img/agents/Breach.png',
	},
	{
		id: '3',
		name: 'Brimstone',
		image_url: '/img/agents/Brim.png',
	},
	{
		id: '4',
		name: 'Chamber',
		image_url: '/img/agents/Chamber.png',
	},
	{
		id: '5',
		name: 'Clove',
		image_url: '/img/agents/Clove.png',
	},
	{
		id: '6',
		name: 'Cypher',
		image_url: '/img/agents/Cypher.png',
	},
	{
		id: '7',
		name: 'Fade',
		image_url: '/img/agents/Fade.png',
	},
	{
		id: '8',
		name: 'Harbor',
		image_url: '/img/agents/Harbor.png',
	},
	{
		id: '9',
		name: 'Iso',
		image_url: '/img/agents/Iso.png',
	},
	{
		id: '10',
		name: 'Jett',
		image_url: '/img/agents/Jett.png',
	},
	{
		id: '11',
		name: 'Kayo',
		image_url: '/img/agents/Kayo.png',
	},
	{
		id: '12',
		name: 'Killjoy',
		image_url: '/img/agents/Killjoy.png',
	},
	{
		id: '13',
		name: 'Neon',
		image_url: '/img/agents/Neon.png',
	},
	{
		id: '14',
		name: 'Omen',
		image_url: '/img/agents/Omen.png',
	},
	{
		id: '15',
		name: 'Phoenix',
		image_url: '/img/agents/Phoenix.png',
	},
	{
		id: '16',
		name: 'Raze',
		image_url: '/img/agents/Raze.png',
	},
	{
		id: '17',
		name: 'Reyna',
		image_url: '/img/agents/Reyna.png',
	},
	{
		id: '18',
		name: 'Sage',
		image_url: '/img/agents/Sage.png',
	},
	{
		id: '19',
		name: 'Skye',
		image_url: '/img/agents/Skye.png',
	},
	{
		id: '20',
		name: 'Sova',
		image_url: '/img/agents/Sova.png',
	},
	{
		id: '21',
		name: 'Tejo',
		image_url: '/img/agents/Tejo.png',
	},
	{
		id: '22',
		name: 'Viper',
		image_url: '/img/agents/Viper.png',
	},
	{
		id: '23',
		name: 'Vyse',
		image_url: '/img/agents/Vyse.png',
	},
	{
		id: '24',
		name: 'Yoru',
		image_url: '/img/agents/Yoru.png',
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
		image_url: '/img/guns/machine guns/Ares.png',
	},
	{
		id: '2',
		type_of_gun_id: '1',
		name: 'Odin',
		image_url: '/img/guns/machine guns/Odin.png',
	},
	{
		id: '3',
		type_of_gun_id: '2',
		name: 'Melee',
		image_url: '/img/guns/melee/Melee.png',
	},
	{
		id: '4',
		type_of_gun_id: '3',
		name: 'Bulldog',
		image_url: '/img/guns/rifles/Bulldog.png',
	},
	{
		id: '5',
		type_of_gun_id: '3',
		name: 'Guardian',
		image_url: '/img/guns/rifles/Guardian.png',
	},
	{
		id: '6',
		type_of_gun_id: '3',
		name: 'Phantom',
		image_url: '/img/guns/rifles/Phantom.png',
	},
	{
		id: '7',
		type_of_gun_id: '3',
		name: 'Vandal',
		image_url: '/img/guns/rifles/Vandal.png',
	},
	{
		id: '8',
		type_of_gun_id: '4',
		name: 'Bucky',
		image_url: '/img/guns/shotguns/Bucky.png',
	},
	{
		id: '9',
		type_of_gun_id: '4',
		name: 'Judge',
		image_url: '/img/guns/shotguns/Judge.png',
	},
	{
		id: '10',
		type_of_gun_id: '5',
		name: 'Classic',
		image_url: '/img/guns/sidearms/Classic.png',
	},
	{
		id: '11',
		type_of_gun_id: '5',
		name: 'Frenzy',
		image_url: '/img/guns/sidearms/Frenzy.png',
	},
	{
		id: '12',
		type_of_gun_id: '5',
		name: 'Ghost',
		image_url: '/img/guns/sidearms/Ghost.png',
	},
	{
		id: '13',
		type_of_gun_id: '5',
		name: 'Sheriff',
		image_url: '/img/guns/sidearms/Sheriff.png',
	},
	{
		id: '14',
		type_of_gun_id: '5',
		name: 'Shorty',
		image_url: '/img/guns/sidearms/Shorty.png',
	},
	{
		id: '15',
		type_of_gun_id: '6',
		name: 'Spectre',
		image_url: '/img/guns/smgs/Spectre.png',
	},
	{
		id: '16',
		type_of_gun_id: '6',
		name: 'Stinger',
		image_url: '/img/guns/smgs/Stinger.png',
	},
	{
		id: '17',
		type_of_gun_id: '7',
		name: 'Marshal',
		image_url: '/img/guns/sniper rifles/Marshal.png',
	},
	{
		id: '18',
		type_of_gun_id: '7',
		name: 'Operator',
		image_url: '/img/guns/sniper rifles/Operator.png',
	},
	{
		id: '19',
		type_of_gun_id: '7',
		name: 'Outlaw',
		image_url: '/img/guns/sniper rifles/Outlaw.png',
	},
]

export { agents, roles, typeOfGuns, guns }
