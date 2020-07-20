import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { Helmet } from "react-helmet";

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
import BlogDetailPage from "./pages/blog-detail-page";

const App = () => {
  return (
    <div>
      <Helmet>
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=1"
        />
        <title>
          Magento Development Company India | Magento eCommerce Development
          India
        </title>
        <meta
          name="description"
          content="Magento Monkeys is leading Magento eCommerce development company from India. We offers various ranges of Magento related services and solution. With Magento certified team of developers, we have 15+ years of experience in the market."
        ></meta>
        <link rel="canonical" href="https://www.magemonkeys.com/"></link>
      </Helmet>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/b2b" component={B2BPage} />
        <Route
          path="/extension-development"
          component={ExtensionDevelopmentPage}
        />
        <Route path="/ecommerce" component={EcommercePage} />
        <Route path="/down2com" component={Down2comPage} />
        <Route path="/api-integration" component={ApiintegrationPage} />
        <Route path="/is-automotive" component={IsAutomotivePage} />
        <Route path="/mmplace" component={MagentoMarketPlacePage} />
        <Route path="/mobile-app" component={MobileAppPage} />
        <Route path="/migrate-to-magento" component={MigrateToMagentoPage} />
        <Route
          path="/performance-optimization"
          component={PerformanceOptimizationPage}
        />
        <Route path="/upgrade-services" component={UpgradeServicesPage} />
        <Route path="/work" component={WorkPage} />
        <Route path="/hire-developers" component={HireDevelopersPage} />
        <Route path="/consumer-goods" component={ConsumerGoodsPage} />
        <Route path="/fashion-and-apparel" component={FashionAndApparelPage} />
        <Route
          path="/furniture-home-decor"
          component={FurnitureHomeDecorPage}
        />
        <Route path="/gems-jewellery" component={GemsJewelleryPage} />
        <Route path="/health-beauty" component={HealthBeautyPage} />
        <Route path="/packages" component={PackagesPage} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/blog-detail" component={BlogDetailPage} />
      </Switch>
    </div>
  );
};

export default App;
