import { Button } from "@sailor/ui/components/button";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from "@sailor/ui/components/input-group";
import { Kbd } from "@sailor/ui/components/kbd";
import { SidebarTrigger } from "@sailor/ui/components/sidebar";
import { Link } from "@tanstack/react-router";
import { CloudyIcon, SearchIcon } from "lucide-react";
import { AppLocales } from "./app-locales";
import { AppNotifications } from "./app-notifications";
import { AppRegion } from "./app-region";
import { AppTerminal } from "./app-terminal";
import { AppThemes } from "./app-themes";
import { AppUser } from "./app-user";

function AppHeader() {
	return (
		<div className="fixed top-0 w-full z-50 bg-sidebar border-b">
			<div className="py-4 px-2 flex items-center justify-between gap-20">
				<div className="flex items-center gap-2">
					<SidebarTrigger />
					<Button variant="ghost" asChild>
						<Link to="/">
							<CloudyIcon />
							<span>Sailor</span>
						</Link>
					</Button>
				</div>
				<InputGroup className="max-w-4xl">
					<InputGroupAddon>
						<SearchIcon />
					</InputGroupAddon>
					<InputGroupInput placeholder="Search for anything..." />
					<InputGroupAddon align="inline-end">
						<Kbd>⌘ + K</Kbd>
					</InputGroupAddon>
				</InputGroup>
				<div className="flex items-center gap-2">
					<AppTerminal />
					<AppNotifications />
					<AppLocales />
					<AppThemes />
					<AppRegion />
					<AppUser />
				</div>
			</div>
		</div>
	);
}

export { AppHeader };
