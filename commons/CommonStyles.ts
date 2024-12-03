import { ViewStyle } from "react-native"

interface CommonStyleProps {
  container: ViewStyle
}

export const CommonStyles: CommonStyleProps = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
}