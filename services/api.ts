interface ApiResponse<T> {
  ok: boolean;
  data?: T;
  error?: string;
}

/**
 * A wrapper for async operations to provide timeout and standardized error handling.
 * @param operation
 * @param timeout 
 * @returns A promise that resolves to an ApiResponse object.
 */
export async function apiFetch<T>(
  operation: () => Promise<T>,
  timeout = 10000
): Promise<ApiResponse<T>> {
  try {
    const timeoutPromise = new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error('Request timed out')), timeout)
    );

    const data = await Promise.race([operation(), timeoutPromise]);
    
    return { ok: true, data };
  } catch (error: any) {
    console.error('API Fetch Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return { ok: false, error: errorMessage };
  }
}
