import { createQwikCity } from "@builder.io/qwik-city/middleware/node";
import qwikCityPlan from "@qwik-city-plan";
import render from "./entry.ssr"; // @qwik-city-plan must be imported before entry.

export default createQwikCity({ render, qwikCityPlan });
