import { Avatar, AvatarFallback } from "@sailor/ui/components/avatar";
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
import { BuildingIcon, LogOutIcon, UserCircleIcon } from "lucide-react";

function AppUser() {
	return (
		<DropdownMenu>
			<Tooltip>
				<TooltipTrigger asChild>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" size="icon">
							<Avatar>
								<AvatarFallback>SC</AvatarFallback>
							</Avatar>
						</Button>
					</DropdownMenuTrigger>
				</TooltipTrigger>
				<TooltipContent>Current User</TooltipContent>
			</Tooltip>
			<DropdownMenuContent align="end" className="w-[250px]">
				<DropdownMenuGroup>
					<DropdownMenuLabel className="flex flex-col">
						<span>Sailor User</span>
						<span className="text-muted-foreground">user@sailor.com</span>
					</DropdownMenuLabel>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem>
						<UserCircleIcon />
						<span>Account Settings</span>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<BuildingIcon />
						<span>Organization Settings</span>
					</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem>
						<LogOutIcon />
						<span>Sign Out</span>
					</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

export { AppUser };
