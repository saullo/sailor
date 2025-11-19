import { Button } from "@sailor/ui/components/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@sailor/ui/components/dropdown-menu";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@sailor/ui/components/tooltip";
import { CheckIcon, GlobeIcon } from "lucide-react";
import { appRegions } from "../-lib/app-regions";

const groupedByCountry = appRegions.reduce(
	(regions, region) => {
		if (!regions[region.country]) {
			regions[region.country] = [];
		}

		regions[region.country].push(region);

		return regions;
	},
	{} as Record<string, typeof appRegions>,
);

const grouped = Object.entries(groupedByCountry).map(([country, regions]) => ({
	country,
	regions,
}));

function AppRegion() {
	return (
		<DropdownMenu>
			<Tooltip>
				<TooltipTrigger asChild>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" size="icon">
							<GlobeIcon />
						</Button>
					</DropdownMenuTrigger>
				</TooltipTrigger>
				<TooltipContent>Regions</TooltipContent>
			</Tooltip>
			<DropdownMenuContent align="end" className="w-[380px] h-[50vh]">
				<DropdownMenuGroup>
					<DropdownMenuLabel>Regions</DropdownMenuLabel>
				</DropdownMenuGroup>
				{grouped.map((group, index) => (
					<DropdownMenuGroup key={group.country}>
						<DropdownMenuLabel className="text-muted-foreground text-xs">
							{group.country}
						</DropdownMenuLabel>
						{group.regions.map((region) => (
							<DropdownMenuItem
								key={region.code}
								disabled={region.code === "us-east-1"}
								className="flex justify-between"
							>
								<div className="flex items-center justify-between gap-2">
									<span>{region.code}</span>
									{region.code === "us-east-1" && <CheckIcon />}
								</div>
								<span>{region.name}</span>
							</DropdownMenuItem>
						))}
						<DropdownMenuSeparator hidden={index === grouped.length - 1} />
					</DropdownMenuGroup>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

export { AppRegion };
