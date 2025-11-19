import { Button } from "@sailor/ui/components/button";
import {
	Drawer,
	DrawerClose,
	DrawerOverlay,
	DrawerPortal,
	DrawerTrigger,
} from "@sailor/ui/components/drawer";
import { cn } from "@sailor/ui/lib/utils";
import { SquareTerminalIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { Drawer as DrawerPrimitive } from "vaul";

function AppTerminal() {
	const [open, setOpen] = useState(false);

	return (
		<Drawer
			dismissible={false}
			open={open}
			onOpenChange={setOpen}
			modal={false}
		>
			<DrawerTrigger asChild>
				<Button variant="ghost" size="icon">
					<SquareTerminalIcon />
				</Button>
			</DrawerTrigger>
			<DrawerPortal data-slot="drawer-portal">
				<DrawerOverlay />
				<DrawerPrimitive.Content
					data-slot="drawer-content"
					className={cn(
						"group/drawer-content bg-background fixed z-50 flex h-auto flex-col",
						"data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg data-[vaul-drawer-direction=top]:border-b",
						"data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg data-[vaul-drawer-direction=bottom]:border-t",
						"data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:sm:max-w-sm",
						"data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:sm:max-w-sm",
					)}
				>
					<div className="h-[35vh]">
						<DrawerClose
							className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
							onClick={() => setOpen(false)}
						>
							<XIcon />
							<span className="sr-only">Close</span>
						</DrawerClose>

						<div className="bg-sidebar/80 rounded-xl mx-2 mt-3 p-2 h-full">
							<span className="font-semibold text-xs">$</span>
						</div>
					</div>
				</DrawerPrimitive.Content>
			</DrawerPortal>
		</Drawer>
	);
}

export { AppTerminal };
