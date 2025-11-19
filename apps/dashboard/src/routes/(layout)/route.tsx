import { SidebarInset, SidebarProvider } from "@sailor/ui/components/sidebar";
import { createFileRoute, Outlet } from "@tanstack/react-router";
import { AppHeader } from "./-components/app-header";
import { AppSidebar } from "./-components/app-sidebar";

export const Route = createFileRoute("/(layout)")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<SidebarProvider>
			<AppHeader />
			<AppSidebar />
			<SidebarInset>
				<Outlet />
			</SidebarInset>
		</SidebarProvider>
	);
}
