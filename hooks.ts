

import React, { useState, useRef, useCallback, Dispatch, SetStateAction, useEffect } from 'react';
import { ToastMessage, CartItem, Product } from './types';
import { safeLocalGet, safeLocalSet } from './utils';

export const useLocalStorage = <T,>(key: string, initialValue: T): [T, Dispatch<SetStateAction<T>>] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    return safeLocalGet(key, initialValue);
  });

  const setValue: Dispatch<SetStateAction<T>> = useCallback((value) => {
    setStoredValue(prevValue => {
        const valueToStore = value instanceof Function ? value(prevValue) : value;
        safeLocalSet(key, valueToStore);
        return valueToStore;
    });
  }, [key]);

  return [storedValue, setValue];
};

export const useToast = () => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const toastCount = useRef(0);

  const addToast = useCallback((message: string, type: 'success' | 'error') => {
    const id = toastCount.current++;
    setToasts(prevToasts => [...prevToasts, { id, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 5000);
  }, []);

  const removeToast = useCallback((id: number) => {
    setToasts(prevToasts => prevToasts.filter(toast => toast.id !== id));
  }, []);

  return { toasts, addToast, removeToast };
};

/**
 * A reusable hook for triggering animations when an element scrolls into view.
 * It uses the Intersection Observer API for performance.
 * The hook will add the 'is-visible' class when the element enters the viewport.
 * @param {IntersectionObserverInit} options - Optional configuration for the Intersection Observer.
 * @returns {React.RefObject} A ref to be attached to the element you want to animate.
 */
export const useAnimateOnScroll = <T extends HTMLElement>(options?: IntersectionObserverInit): React.RefObject<T> => {
    const ref = useRef<T>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1,
                ...options,
            }
        );
        
        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [options]);

    return ref;
};
/* update for production ( not so serious, I was trying to act cool with the comment thing) */
/**
 * Manages all cart-related state and logic, simulating an async flow.
 */
export const useCart = () => {
    const [cart, setCart] = useLocalStorage<CartItem[]>('cart', []);
    const { addToast } = useToast();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const loadCart = useCallback(() => {
        setLoading(true);
        setError(null);
        // Simulate an async operation that can fail to demonstrate loading/error states
        setTimeout(() => {
            try {
                // To test failure, uncomment this line:
                // if (Math.random() < 0.5) throw new Error("Could not connect to cart service.");
                
                // On success, we just use the value from useLocalStorage which is already loaded.
                // In a real app, this is where you'd fetch from an API and then setCart.
                setLoading(false);
            } catch (e: any) {
                setError(e.message || "Failed to load cart.");
                setLoading(false);
            }
        }, 500);
    }, []);

    useEffect(() => {
        loadCart();
    }, [loadCart]);

    const addToCart = useCallback((product: Product) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === product.id);
            if (existingItem) {
                return prevCart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
        addToast(`${product.name} added to cart!`, 'success');
    }, [setCart, addToast]);

    const updateCartQuantity = useCallback((productId: string, quantity: number) => {
        setCart(prevCart => {
            const itemExists = prevCart.some(item => item.id === productId);
            if (!itemExists) return prevCart;

            if (quantity <= 0) {
                const removedItem = prevCart.find(item => item.id === productId);
                if (removedItem) {
                    addToast(`${removedItem.name} removed from cart.`, 'success');
                }
                return prevCart.filter(item => item.id !== productId);
            }

            return prevCart.map(item => item.id === productId ? { ...item, quantity } : item);
        });
    }, [setCart, addToast]);
    
    const clearCart = useCallback(() => {
        setCart([]);
    }, [setCart]);
    
    return { cart, loading, error, reload: loadCart, addToCart, updateCartQuantity, clearCart };
}
