variable "BACKEND_KEY" {
  type     = string
  sensitive = true
}

terraform {
  # backend "local" {}
  backend "azurerm" {
    resource_group_name  = "GithubActionsNode"
    storage_account_name = "terraformbackendghan"
    container_name       = "terraform-state"
    key                  = "terraform.tfstate"
  }
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "3.0.2"
    }
  }
}

provider "azurerm" {
  features {}
}
