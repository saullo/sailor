import { Button } from "@sailor/ui/components/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from "@sailor/ui/components/dropdown-menu";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@sailor/ui/components/tooltip";
import {
	CheckIcon,
	LaptopMinimalIcon,
	MoonIcon,
	PaletteIcon,
	SunIcon,
} from "lucide-react";

function AppThemes() {
	return (
		<DropdownMenu>
			<Tooltip>
				<TooltipTrigger asChild>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" size="icon">
							<PaletteIcon />
						</Button>
					</DropdownMenuTrigger>
				</TooltipTrigger>
				<TooltipContent>Themes</TooltipContent>
			</Tooltip>
			<DropdownMenuContent align="end" className="w-[250px]">
				<DropdownMenuGroup>
					<DropdownMenuLabel>Themes</DropdownMenuLabel>
				</DropdownMenuGroup>
				<DropdownMenuGroup>
					<DropdownMenuItem>
						<SunIcon />
						<span>Light Theme</span>
					</DropdownMenuItem>
					<DropdownMenuItem disabled>
						<MoonIcon />
						<span>Dark Theme</span>
						<CheckIcon className="ml-auto" />
					</DropdownMenuItem>
					<DropdownMenuItem>
						<LaptopMinimalIcon />
						<span>System Theme</span>
					</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

export { AppThemes };
