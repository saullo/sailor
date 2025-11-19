import { Button } from "@sailor/ui/components/button";
import {
	Empty,
	EmptyDescription,
	EmptyHeader,
	EmptyTitle,
} from "@sailor/ui/components/empty";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@sailor/ui/components/popover";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@sailor/ui/components/tooltip";
import { BellIcon } from "lucide-react";

function AppNotifications() {
	return (
		<Popover>
			<Tooltip>
				<TooltipTrigger asChild>
					<PopoverTrigger asChild>
						<Button variant="ghost" size="icon">
							<BellIcon />
						</Button>
					</PopoverTrigger>
				</TooltipTrigger>
				<TooltipContent>Notifications</TooltipContent>
			</Tooltip>
			<PopoverContent align="end" className="w-[450px]">
				<span className="text-sm font-medium">Notifications</span>

				<Empty>
					<EmptyHeader>
						<EmptyTitle>No Notifications</EmptyTitle>
						<EmptyDescription>
							Modify your notification configurations to specify which events
							generate notifications
						</EmptyDescription>
					</EmptyHeader>
				</Empty>
			</PopoverContent>
		</Popover>
	);
}

export { AppNotifications };
