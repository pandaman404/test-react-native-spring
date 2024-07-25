type AppStackParamList = {
  Home: undefined;
  Poll: undefined;
  Results: undefined;
};

export type NavigationProps = StackNavigationProp<AppStackParamList, keyof AppStackParamList>;
