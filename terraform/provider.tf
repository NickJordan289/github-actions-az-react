terraform {
  # backend "local" {}
  backend "azurerm" {
    resource_group_name  = "GithubActionsNode"
    storage_account_name = "terraformbackendghan"
    container_name       = "terraform-state"
    key                  = "terraform.tfstate"
    access_key           = "h/j3hcncHPiw/vbrcrRLd3HGt0uG2jvvmp8jKIEHxtO22Kc8ywKHOyFV2YsCtkA9XJCszyOQJpdLzSGGWccxag=="

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
