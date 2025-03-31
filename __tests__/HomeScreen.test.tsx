import React from "react";
import { render } from "@testing-library/react-native";
import HomeScreen from "../app/index/index";

const mockSalons = [
  {
    id: 1,
    name: "Salon One",
    postalPlace: "Oslo",
    coordinates: {
      latitude: "59.911491",
      longitude: "10.757933",
    },
  },
  {
    id: 2,
    name: "Salon Two",
    postalPlace: "Bergen",
    coordinates: {
      latitude: "60.3913",
      longitude: "5.3221",
    },
  },
];

// Mock the useSalon hook to return test data
jest.mock("../hooks/useSalon", () => ({
  useSalon: () => ({
    salons: mockSalons,
  }),
}));

jest.mock("../hooks/useLocation", () => ({
  useLocation: () => ({
    location: {
      coords: {
        latitude: 59.9,
        longitude: 10.7,
      },
    },
  }),
}));

jest.mock("expo-router", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

// Mock react-native-maps components
jest.mock("react-native-maps", () => {
  const { View } = require("react-native");
  return {
    __esModule: true,
    default: View,
    Marker: ({ children }: any) => <View testID="marker">{children}</View>,
    MapView: ({ children }: any) => <View>{children}</View>,
  };
});

describe("HomeScreen", () => {
  it("Should render HomeScreen with List button", () => {
    const { getByText } = render(<HomeScreen />);
    expect(getByText("List")).toBeTruthy();
  });

  it("Should render a marker for each salon", () => {
    const { getAllByTestId } = render(<HomeScreen />);
    const markers = getAllByTestId("marker");
    expect(markers.length).toBe(mockSalons.length);
  });
});
