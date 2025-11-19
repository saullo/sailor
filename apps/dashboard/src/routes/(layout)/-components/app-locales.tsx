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
import { CheckIcon, LanguagesIcon } from "lucide-react";
import { appLocales } from "../-lib/app-locales";

function AppLocales() {
	return (
		<DropdownMenu>
			<Tooltip>
				<TooltipTrigger asChild>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" size="icon">
							<LanguagesIcon />
						</Button>
					</DropdownMenuTrigger>
				</TooltipTrigger>
				<TooltipContent>Locales</TooltipContent>
			</Tooltip>
			<DropdownMenuContent align="end" className="w-[250px]">
				<DropdownMenuGroup>
					<DropdownMenuLabel>Locales</DropdownMenuLabel>
				</DropdownMenuGroup>
				<DropdownMenuGroup>
					{appLocales.map((locale) => (
						<DropdownMenuItem
							key={locale.code}
							disabled={locale.code === "en-US"}
						>
							<span>{locale.name}</span>
							{locale.code === "en-US" && <CheckIcon className="ml-auto" />}
						</DropdownMenuItem>
					))}
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

export { AppLocales };
