export const formatCurrency = (amount: number) => {
  if (amount === 0) return 'Free';
  return `Ksh ${amount.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
};

/**
 * Safely retrieves and parses a value from localStorage.
 * @param key The localStorage key.
 * @param defaultValue The default value to return if the key doesn't exist or data is corrupt.
 * @returns The parsed value or the default value.
 */
export const safeLocalGet = <T>(key: string, defaultValue: T): T => {
    try {
        const item = window.localStorage.getItem(key);
        if (item) {
            return JSON.parse(item);
        }
        return defaultValue;
    } catch (error) {
        console.error(`Error reading from localStorage for key "${key}":`, error);
        window.localStorage.removeItem(key); // Clear corrupted data
        return defaultValue;
    }
};

/**
 * Safely stringifies and sets a value in localStorage.
 * @param key The localStorage key.
 * @param value The value to set.
 */
export const safeLocalSet = <T>(key: string, value: T): void => {
    try {
        window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error(`Error writing to localStorage for key "${key}":`, error);
    }
};
