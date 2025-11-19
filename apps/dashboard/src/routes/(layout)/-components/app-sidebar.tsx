import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@sailor/ui/components/collapsible";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
} from "@sailor/ui/components/sidebar";
import { Link, useLocation } from "@tanstack/react-router";
import {
	HelpCircleIcon,
	MinusIcon,
	PlusIcon,
	SettingsIcon,
} from "lucide-react";
import { appSidebarItems } from "../-lib/app-sidebar-items";
import { AppOrganization } from "./app-organization";

function AppSidebar() {
	const location = useLocation();

	return (
		<Sidebar className="pt-[60px]">
			<SidebarHeader></SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarMenu>
						{appSidebarItems.map((item) => {
							const isGroupActive = location.href.startsWith(item.href);

							return item.links ? (
								<Collapsible
									key={item.title}
									className="group/collapsible"
									defaultOpen={isGroupActive}
								>
									<SidebarMenuItem>
										<CollapsibleTrigger asChild>
											<SidebarMenuButton tooltip={item.title}>
												<item.icon />
												<span>{item.title}</span>
												<PlusIcon className="ml-auto group-data-[state=open]/collapsible:hidden" />
												<MinusIcon className="ml-auto group-data-[state=closed]/collapsible:hidden" />
											</SidebarMenuButton>
										</CollapsibleTrigger>
										<CollapsibleContent>
											<SidebarMenuSub>
												{item.links.map((item) => (
													<SidebarMenuSubItem key={item.href}>
														<SidebarMenuSubButton asChild>
															<Link
																to={item.href}
																activeProps={{ "data-active": true }}
															>
																<span>{item.title}</span>
															</Link>
														</SidebarMenuSubButton>
														<SidebarMenuSub hidden={!isGroupActive}>
															{item.links?.map((item) => (
																<SidebarMenuSubItem key={item.href}>
																	<SidebarMenuSubButton asChild>
																		<Link
																			to={item.href}
																			activeProps={{ "data-active": true }}
																		>
																			<span>{item.title}</span>
																		</Link>
																	</SidebarMenuSubButton>
																</SidebarMenuSubItem>
															))}
														</SidebarMenuSub>
													</SidebarMenuSubItem>
												))}
											</SidebarMenuSub>
										</CollapsibleContent>
									</SidebarMenuItem>
								</Collapsible>
							) : (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton tooltip={item.title} asChild>
										<Link to={item.href} activeProps={{ "data-active": true }}>
											<item.icon />
											<span>{item.title}</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							);
						})}
					</SidebarMenu>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton>
							<HelpCircleIcon />
							<span>Get Help</span>
						</SidebarMenuButton>
						<SidebarMenuButton>
							<SettingsIcon />
							<span>Settings</span>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
				<AppOrganization />
			</SidebarFooter>
		</Sidebar>
	);
}

export { AppSidebar };
