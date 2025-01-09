import { View, Text, TextInput, TextInputProps, TouchableOpacity } from 'react-native';
import { Eye, EyeOff } from 'lucide-react-native';

interface FormInputProps extends TextInputProps {
  label: string;
  error?: string;
  showPasswordToggle?: boolean;
  showPassword?: boolean;
  onPasswordToggle?: () => void;
}

export default function FormInput({
  label,
  error,
  showPasswordToggle,
  showPassword,
  onPasswordToggle,
  ...props
}: FormInputProps) {
  return (
    <View className="mb-4">
      <Text className="text-white mb-2">{label}</Text>
      <View className="relative">
        <TextInput
          className={`bg-gray-800/40 rounded-lg px-4 py-3 text-white ${
            showPasswordToggle ? 'pr-12' : ''
          } ${error ? 'border border-red-500' : ''}`}
          placeholderTextColor="#666"
          {...props}
        />
        {showPasswordToggle && (
          <TouchableOpacity 
            className="absolute right-4 top-3"
            onPress={onPasswordToggle}
          >
            {showPassword ? (
              <EyeOff size={20} color="white" />
            ) : (
              <Eye size={20} color="white" />
            )}
          </TouchableOpacity>
        )}
      </View>
      {error && (
        <Text className="text-red-500 text-sm mt-1">{error}</Text>
      )}
    </View>
  );
}

