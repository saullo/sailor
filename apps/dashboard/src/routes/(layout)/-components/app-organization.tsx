import { Avatar, AvatarFallback } from "@sailor/ui/components/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@sailor/ui/components/dropdown-menu";
import { SidebarMenuButton } from "@sailor/ui/components/sidebar";
import { CheckIcon, ChevronsUpDownIcon, PlusIcon } from "lucide-react";

function AppOrganization() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<SidebarMenuButton
					size="lg"
					className="flex items-center justify-between"
				>
					<div className="flex items-center gap-2">
						<Avatar>
							<AvatarFallback>SC</AvatarFallback>
						</Avatar>
						<div className="flex flex-col text-xs">
							<span>Sailor Org</span>
							<span className="text-muted-foreground">Organization</span>
						</div>
					</div>
					<ChevronsUpDownIcon />
				</SidebarMenuButton>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" side="right" className="w-[250px]">
				<DropdownMenuGroup>
					<DropdownMenuItem disabled>
						<Avatar className="size-4 text-xs">
							<AvatarFallback>SO</AvatarFallback>
						</Avatar>
						<span>Sailor Org</span>
						<CheckIcon className="ml-auto" />
					</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem>
						<PlusIcon />
						<span>Add Organization</span>
					</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

export { AppOrganization };
