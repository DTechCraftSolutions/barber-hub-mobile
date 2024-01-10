
import { ReactNode } from 'react';

declare module 'react-native' {
  interface ViewProps {
    className?: string;
  }

  interface TextProps {
    className?: string;
  }

  interface ImageProps {
    className?: string;
  }

  interface TouchableOpacityProps {
    className?: string;
  }

  interface TextInputProps {
    className?: string;
  }
  interface StatusBarProps {
    className?: string;
  }

  interface ImageBackgroundProps {
    className?: string;
  }

}