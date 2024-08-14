import React from "react";
import { Image, StyleSheet, Text, View } from "@react-pdf/renderer";

const ChecklistIcon = ({ checked = false }) => {
	if (checked) return <Image src={"/checklist.jpg"} style={{ width: 12 }} />;
	else return <Image src={"/unchecklist.jpg"} style={{ width: 12 }} />;
};

export default ChecklistIcon;
