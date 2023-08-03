import React from 'react'
import { TextInput, StyleSheet, TextInputProps, Platform } from 'react-native'
import { useRTL } from "@src/i18n"
import { useTheme } from './CountryTheme'

const styles = StyleSheet.create({
  input: {
    height: 48,
    width: '70%',
    ...Platform.select({
      web: {
        outlineWidth: 0,
        outlineColor: 'transparent',
        outlineOffset: 0,
      },
    }),
  },
})

export type CountryFilterProps = TextInputProps

export const CountryFilter = (props: CountryFilterProps) => {
  const RTL = useRTL()
  const {
    filterPlaceholderTextColor,
    fontFamily,
    fontSize,
    onBackgroundTextColor,
    filterTextAlign,
    filterTextAlignVertical,
  } = useTheme()
  return (
    <TextInput
      testID='text-input-country-filter'
      autoCorrect={false}
      placeholderTextColor={filterPlaceholderTextColor}
      placeholder={!RTL ? "Search" : "أبحث"}
      style={[
        styles.input,
        { 
          fontFamily,
          fontSize,
          color: onBackgroundTextColor,
          textAlign: RTL ? 'right' : 'left',
          textAlignVertical: filterTextAlignVertical,
        },
      ]}
      {...props}
    />
  )
}

CountryFilter.defaultProps = {
  autoFocus: false,
}
