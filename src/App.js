import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage";
import ContactPage from "./pages/contact-page";
import B2BPage from "./pages/b2b-page";
import ExtensionDevelopmentPage from "./pages/extension-development-page";
import EcommercePage from "./pages/ecommerce-page";
import Down2comPage from "./pages/down2com-page";
import ApiintegrationPage from "./pages/apiintegration-page";
import IsAutomotivePage from "./pages/is-automotive-page";
import MagentoMarketPlacePage from "./pages/mmplace-page";
import MobileAppPage from "./pages/mobile-app-page";
import MigrateToMagentoPage from "./pages/migrate-to-magento-page";
import PerformanceOptimizationPage from "./pages/performance-optimization-page";
import UpgradeServicesPage from "./pages/upgrade-services-page";
import WorkPage from "./pages/work-page";
import HireDevelopersPage from "./pages/hire-developers-page";
import ConsumerGoodsPage from "./pages/consumer-goods-page";
import FashionAndApparelPage from "./pages/fashion-and-apparel-page";
import FurnitureHomeDecorPage from "./pages/furniture-home-decor-page";
import GemsJewelleryPage from "./pages/gems-jewellery-page";
import HealthBeautyPage from "./pages/health-beauty-page";
import PackagesPage from "./pages/packages-page";
import BlogPage from "./pages/blog-page";
import Blog1Page from "./pages/blog-pages/blog1-page";
import Blog2Page from "./pages/blog-pages/blog2-page";
import Blog3Page from "./pages/blog-pages/blog3-page";
import Blog4Page from "./pages/blog-pages/blog4-page";
import Blog5Page from "./pages/blog-pages/blog5-page";
import Blog6Page from "./pages/blog-pages/blog6-page";
import Blog7Page from "./pages/blog-pages/blog7-page";
import Blog8Page from "./pages/blog-pages/blog8-page";
import Blog9Page from "./pages/blog-pages/blog9-page";
import Blog10Page from "./pages/blog-pages/blog10-page";
import Work1Page from "./pages/work-pages/work1-page";
import Work2Page from "./pages/work-pages/work2-page";
import Work3Page from "./pages/work-pages/work3-page";
import Work4Page from "./pages/work-pages/work4-page";
import Work5Page from "./pages/work-pages/work5-page";
import Work6Page from "./pages/work-pages/work6-page";
import Work7Page from "./pages/work-pages/work7-page";
import Work8Page from "./pages/work-pages/work8-page";
import Work9Page from "./pages/work-pages/work9-page";
import Work10Page from "./pages/work-pages/work10-page";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/magento-enterprise-b2b-solution" component={B2BPage} />
        <Route
          path="/magento-extension-development"
          component={ExtensionDevelopmentPage}
        />
        <Route
          path="/ecommerce-store-development-service"
          component={EcommercePage}
        />
        <Route
          path="/downgrading-magento-enterprise-to-community-edition"
          component={Down2comPage}
        />
        <Route
          path="/magento-rest-api-integration"
          component={ApiintegrationPage}
        />
        <Route
          path="/automotive-magento-ecommerce-solution"
          component={IsAutomotivePage}
        />
        <Route path="/magento-marketplace" component={MagentoMarketPlacePage} />
        <Route
          path="/magento-mobile-app-development"
          component={MobileAppPage}
        />
        <Route
          path="/migrate-ecommerce-store-website-magento"
          component={MigrateToMagentoPage}
        />
        <Route
          path="/magento-performance-optimization-service"
          component={PerformanceOptimizationPage}
        />
        <Route path="/upgrade-services" component={UpgradeServicesPage} />
        <Route path="/work" component={WorkPage} />
        <Route path="/hire-magento-developer" component={HireDevelopersPage} />
        <Route
          path="/consumer-goods-e-commerce-development-solutions"
          component={ConsumerGoodsPage}
        />
        <Route
          path="/fashion-apparel-magento-ecommerce-solution"
          component={FashionAndApparelPage}
        />
        <Route
          path="/furniture-home-decor-magento-ecommerce-solution"
          component={FurnitureHomeDecorPage}
        />
        <Route
          path="/gems-jewelry-magento-ecommerce-solution"
          component={GemsJewelleryPage}
        />
        <Route
          path="/health-beauty-magento-ecommerce-solution"
          component={HealthBeautyPage}
        />
        <Route path="/magento-support" component={PackagesPage} />
        <Route path="/blog" component={BlogPage} />
        <Route
          path="/how-to-create-custom-link-for-my-account-section-in-magento-2"
          component={Blog1Page}
        />
        <Route
          path="/how-to-get-category-count-in-magento-2"
          component={Blog2Page}
        />
        <Route
          path="/magento2-display-new-label-of-product-in-product-list-page"
          component={Blog3Page}
        />
        <Route
          path="/what-to-do-when-magento-2-3-1-created-invoices-miss-items"
          component={Blog4Page}
        />
        <Route
          path="/how-to-add-new-button-on-sales-order-view-page-in-admin-side"
          component={Blog5Page}
        />
        <Route
          path="/in-magento-2-how-to-set-custom-price-for-products-in-cart"
          component={Blog6Page}
        />
        <Route
          path="/magento-2-how-to-show-full-breadcrumbs-path-in-product-view-page"
          component={Blog7Page}
        />
        <Route
          path="/send-unique-coupon-code-on-every-new-subscriber"
          component={Blog8Page}
        />
        <Route
          path="/how-to-upgrade-magento-2-using-command-line"
          component={Blog9Page}
        />
        <Route
          path="/magento-bundle-product-price-shows-different-on-list-page-and-product-page"
          component={Blog10Page}
        />
        <Route path="/karoe" component={Work1Page} />
        <Route
          path="/interior-fashion-lifestyle-ecommerce-store-development-house-of-hackney"
          component={Work2Page}
        />
        <Route path="/surplus-industrial-supply" component={Work3Page} />
        <Route path="/imedicale-store" component={Work4Page} />
        <Route
          path="/door-furniture-ecommerce-solution-uber-doors"
          component={Work5Page}
        />
        <Route
          path="/gold-silver-biblical-coins-shop-ecommerce-development"
          component={Work6Page}
        />
        <Route
          path="/home-furniture-ecommerce-store-development"
          component={Work7Page}
        />
        <Route
          path="/garden-products-remedies-ecommerce-shop-development"
          component={Work8Page}
        />
        <Route path="/canapebox" component={Work9Page} />
        <Route
          path="/personalized-printing-ecommerce-solution-ink2print"
          component={Work10Page}
        />
      </Switch>
    </div>
  );
};

export default App;
