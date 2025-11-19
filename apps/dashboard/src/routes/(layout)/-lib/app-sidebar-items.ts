import {
	BlocksIcon,
	BoxIcon,
	BuildingIcon,
	ClipboardListIcon,
	ComputerIcon,
	ContainerIcon,
	DatabaseIcon,
	HomeIcon,
	NetworkIcon,
	ShieldCheckIcon,
	ToolCaseIcon,
	WalletIcon,
} from "lucide-react";

const appSidebarItems = [
	{
		title: "Home",
		icon: HomeIcon,
		href: "/",
	},
	{
		title: "Compute",
		icon: ComputerIcon,
		href: "/compute",
		links: [
			{
				title: "Elastic Compute",
				href: "/compute/elastic-compute",
			},
			{
				title: "Serverless",
				href: "/compute/serverless",
			},
		],
	},
	{
		title: "Container",
		icon: ContainerIcon,
		href: "/container",
		links: [
			{
				title: "Elastic Container",
				href: "/container/container",
			},
			{
				title: "Kubernetes",
				href: "/container/kubernetes",
			},
			{
				title: "Registry",
				href: "/container/registry",
			},
		],
	},
	{
		title: "Storage",
		icon: BoxIcon,
		href: "/storage",
		links: [
			{
				title: "Object Storage",
				href: "/storage/object-storage",
			},
			{
				title: "Elastic File System",
				href: "/storage/elastic-file-system",
			},
		],
	},
	{
		title: "Database",
		icon: DatabaseIcon,
		href: "/database",
		links: [
			{
				title: "Relational Databases",
				href: "/database/relational-databases",
			},
			{
				title: "Elastic Cache",
				href: "/database/elastic-cache",
			},
		],
	},
	{
		title: "Network",
		icon: NetworkIcon,
		href: "/network",
		links: [
			{
				title: "Virtual Private Network",
				href: "/network/virtual-private-network",
			},
			{
				title: "Content Delivery Network",
				href: "/network/content-delivery-network",
			},
			{
				title: "Api Gateway",
				href: "/network/api-gateway",
			},
			{
				title: "Domain Name System",
				href: "/network/domain-name-system",
			},
		],
	},
	{
		title: "Developer Tools",
		icon: ToolCaseIcon,
		href: "/developer",
		links: [
			{
				title: "Repositories",
				href: "/developer/repositories",
			},
			{
				title: "Build",
				href: "/developer/build",
			},
			{
				title: "Deployment",
				href: "/developer/deployment",
			},
			{
				title: "Pipelines",
				href: "/developer/pipelines",
			},
		],
	},
	{
		title: "Governance",
		icon: ClipboardListIcon,
		href: "/governance",
		links: [
			{
				title: "Monitor",
				href: "/governance/monitor",
			},
		],
	},
	{
		title: "Compliance",
		icon: ShieldCheckIcon,
		href: "/compliance",
		links: [
			{
				title: "Secrets Manager",
				href: "/compliance/secrets-manager",
			},
			{
				title: "Identity Center",
				href: "/compliance/identity-center",
			},
		],
	},
	{
		title: "Financial",
		icon: WalletIcon,
		href: "/financial",
		links: [
			{
				title: "Billing and Cost",
				href: "/financial/billing",
			},
		],
	},
	{
		title: "Integration",
		icon: BlocksIcon,
		href: "/integration",
		links: [
			{
				title: "Notification",
				href: "/integration/notification",
			},
			{
				title: "Queue",
				href: "/integration/queue",
			},
		],
	},
	{
		title: "Business",
		icon: BuildingIcon,
		href: "/business",
		links: [
			{
				title: "Email",
				href: "/business/email",
			},
		],
	},
];

export { appSidebarItems };
