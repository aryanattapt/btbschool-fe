"use client";
import am4geodataWorldLow from "@amcharts/amcharts4-geodata/worldLow";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4themesAnimated from "@amcharts/amcharts4/themes/animated";
import { useEffect } from "react";

am4core.useTheme(am4themesAnimated);

const WorldMapChart = ({ markers, width, onSelect }) => {
  useEffect(() => {
    let chart = am4core.create("chartdiv", am4maps.MapChart);
    chart.geodata = am4geodataWorldLow;
    chart.projection = new am4maps.projections.Miller();
    chart.responsive = new am4core.Responsive();
    chart.responsive.enabled = true;

    // Disable zooming
    chart.chartContainer.wheelable = false;
    chart.maxZoomLevel = 1;
    chart.seriesContainer.draggable = false;
    chart.seriesContainer.resizable = false;

    // Detect screen size
    const pos = {
      dx: 0,
      dy: 0,
    };
    const detectResolution = () => {
      let width = window.innerWidth;
      if (width < 768) {
        pos["dx"] = 20;
        pos["dy"] = 35;
      } else if (width < 1024) {
        pos["dx"] = 20;
        pos["dy"] = 35;
      } else {
        pos["dx"] = 20;
        pos["dy"] = 35;
      }
    };
    detectResolution();
    window.addEventListener("resize", detectResolution);

    let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.useGeodata = true;

    let polygonTemplate = polygonSeries.mapPolygons.template;
    // polygonTemplate.tooltipText = "{name}";
    polygonTemplate.tooltipText = "";
    polygonTemplate.fill = am4core.color("#74B266");
    polygonTemplate.interactionsEnabled = false;

    let imageSeries = chart.series.push(new am4maps.MapImageSeries());
    let imageTemplate = imageSeries.mapImages.template;
    imageTemplate.propertyFields.latitude = "latitude";
    imageTemplate.propertyFields.longitude = "longitude";

    let container = imageTemplate.createChild(am4core.Container);
    container.width = 40;
    container.height = 70;
    container.nonScaling = true;
    container.horizontalCenter = "middle";
    container.verticalCenter = "middle";
    container.cursorOverStyle = am4core.MouseCursorStyle.pointer;
    container.events.on("hit", function (ev) {
      onSelect(ev.target.dataItem.dataContext.title);
    });
    container;

    let circle = container.createChild(am4core.Circle);
    circle.radius = 15;
    circle.fill = am4core.color("#FFFFFF");
    circle.stroke = am4core.color("#444444");
    circle.strokeWidth = 2;
    circle.horizontalCenter = "middle";
    circle.verticalCenter = "top";
    circle.dy = -5;
    circle.dx = 20;

    let flag = container.createChild(am4core.Image);
    flag.width = 30;
    flag.height = 30;
    flag.horizontalCenter = "middle";
    flag.verticalCenter = "top";
    flag.propertyFields.href = "icon";
    flag.dy = -5;
    flag.dx = 20;

    let triangle = container.createChild(am4core.Triangle);
    triangle.width = 10;
    triangle.height = 10;
    triangle.fill = am4core.color("#444444");
    triangle.horizontalCenter = "middle";
    triangle.verticalCenter = "bottom";
    triangle.direction = "bottom";
    // triangle.dy = 10;
    triangle.dy = 35;
    triangle.dx = 20;

    imageSeries.data = markers;

    return () => {
      chart.dispose();
      window.removeEventListener("resize", detectResolution);
    };
  }, [markers]);

  return (
    <div
      id="chartdiv"
      style={{
        width: `${width}px`,
        height: `${(width / (width > 639 ? 3 : 1)) * 1}px`,
      }}
    ></div>
  );
};

export default WorldMapChart;
