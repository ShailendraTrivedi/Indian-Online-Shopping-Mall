import { Routes, Route } from "react-router-dom";
import {
  LandingPage,
  AboutPage,
  ContactPage,
  ErrorPage,
  AccountPage,
  ForgetPassword,
  PrivacyPolicyPage,
  HelpCenterPage,
  AccountDashboardPage,
  SearchPage,
  CartPage,
  DescriptionPage,
} from "../pages";
import CheckAuth from "./CheckAuth";

export default function PageRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/search/:product" element={<SearchPage />} />
        <Route path="/description/:_id" element={<DescriptionPage />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/*" element={<ErrorPage />} />
        <Route element={<CheckAuth />}>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/account-dashboard" element={<AccountDashboardPage />} />
          <Route path="/help-center" element={<HelpCenterPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        </Route>
      </Routes>
    </div>
  );
}
