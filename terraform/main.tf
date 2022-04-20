resource "azurerm_application_insights" "res-0" {
  application_type    = "web"
  location            = "australiaeast"
  name                = "GithubActionsNodeReact"
  resource_group_name = "GithubActionsNode"
  sampling_percentage = 0
  workspace_id        = "/subscriptions/c490a576-4e4b-4831-82f9-f131843936bf/resourceGroups/DefaultResourceGroup-EAU/providers/Microsoft.OperationalInsights/workspaces/DefaultWorkspace-c490a576-4e4b-4831-82f9-f131843936bf-EAU"
  depends_on = [
    azurerm_resource_group.res-23,
  ]
}
resource "azurerm_app_service_plan" "res-1" {
  kind                = "linux"
  location            = "australiaeast"
  name                = "ASP-GithubActionsNode-99c8"
  reserved            = true
  resource_group_name = "GithubActionsNode"
  sku {
    size = "B1"
    tier = "Basic"
  }
  depends_on = [
    azurerm_resource_group.res-23,
  ]
}
resource "azurerm_app_service" "app" {
  app_service_plan_id = "/subscriptions/c490a576-4e4b-4831-82f9-f131843936bf/resourceGroups/GithubActionsNode/providers/Microsoft.Web/serverfarms/ASP-GithubActionsNode-99c8"
  location            = "australiaeast"
  name                = "GithubActionsNodeReact"
  resource_group_name = "GithubActionsNode"
  depends_on = [
    azurerm_app_service_plan.res-1,
  ]
  site_config {
    linux_fx_version = "NODE|16-lts"
    app_command_line = "npx serve -s build/"
  }
}
resource "azurerm_app_service_custom_hostname_binding" "res-22" {
  app_service_name    = "GithubActionsNodeReact"
  hostname            = "githubactionsnodereact.azurewebsites.net"
  resource_group_name = "GithubActionsNode"
  depends_on = [
    azurerm_app_service.app,
  ]
}
resource "azurerm_resource_group" "res-23" {
  location = "australiaeast"
  name     = "GithubActionsNode"
}
