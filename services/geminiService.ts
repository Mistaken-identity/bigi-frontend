

import { Product, Review, ReviewSummary } from '../types';
import { LOCAL_PRODUCTS } from '../data';
import { apiFetch } from './api';

// Helper to simulate a network call that can fail
const simulateApiCall = <T>(data: T, failureRate = 0.1): Promise<T> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < failureRate) {
        reject(new Error("Failed to fetch data from the server."));
      } else {
        resolve(data);
      }
    }, 500 + Math.random() * 1000); // Simulate network latency
  });
};


/**
 * Fetches products for a given category from the local data source.
 * @param categoryName - The name of the category to fetch products for.
 * @returns A promise that resolves to an ApiResponse object containing an array of products.
 */
export const generateProductsForCategory = async (categoryName:string) => {
  console.log(`Fetching local products for category: ${categoryName}`);
  
  const operation = () => {
      const products = LOCAL_PRODUCTS[categoryName];
      if (products) {
        return simulateApiCall(products);
      } else {
        console.warn(`No local products found for category: ${categoryName}. Returning empty array.`);
        return simulateApiCall([]);
      }
  };
  
  return await apiFetch(operation);
};

/**
 * Searches for products in the local data source.
 * @param query - The search term entered by the user.
 * @returns A promise that resolves to an ApiResponse object containing an array of matching products.
 */
export const searchProducts = async (query: string) => {
  if (!query || query.trim().length < 2) {
    return { ok: true, data: [] as Product[] };
  }

  const operation = () => {
    const lowerCaseQuery = query.toLowerCase().trim();
    const allProducts: Product[] = Object.values(LOCAL_PRODUCTS).flat();

    const matchedProducts = allProducts.filter(product => 
      product.name.toLowerCase().includes(lowerCaseQuery)
    );

    matchedProducts.sort((a, b) => {
        const aName = a.name.toLowerCase();
        const bName = b.name.toLowerCase();
        if (aName === lowerCaseQuery && bName !== lowerCaseQuery) return -1;
        if (bName === lowerCaseQuery && aName !== lowerCaseQuery) return 1;
        return aName.length - bName.length;
    });
    
    console.log(`Found ${matchedProducts.length} local products for search: "${query}"`);
    return simulateApiCall(matchedProducts);
  };
  
  return await apiFetch(operation);
};

/**
 * Simulates an AI call to summarize product reviews into pros and cons.
 * @param reviews - The array of reviews for a product.
 * @returns A promise that resolves to an ApiResponse object containing a structured summary.
 */
export const summarizeReviews = async (reviews: Review[]) => {
  const operation = (): Promise<ReviewSummary> => {
      return new Promise(resolve => {
          setTimeout(() => {
              if (reviews.length < 2) {
                resolve({ pros: ["Not enough reviews for a summary yet."], cons: [] });
                return;
              }

              const pros: string[] = [];
              const cons: string[] = [];

              // Simple heuristic for simulation
              reviews.forEach(review => {
                const sentiment = review.rating >= 4 ? 'pro' : review.rating <= 2 ? 'con' : 'neutral';
                
                const keywords = {
                  pros: ['love', 'great', 'beautiful', 'excellent', 'perfect', 'amazing', 'comfortable', 'high quality', 'well-made'],
                  cons: ['small', 'bit tight', 'different color', 'stiff', 'not as expected', 'broke', 'cheap']
                };

                if (sentiment === 'pro') {
                  if (pros.length < 3) {
                    let found = false;
                    for (const word of keywords.pros) {
                      if (review.comment.toLowerCase().includes(word)) {
                        if (word === 'comfortable' && !pros.some(p => p.includes('comfort'))) pros.push('Praised for its comfort and fit.');
                        else if (['high quality', 'well-made'].includes(word) && !pros.some(p => p.includes('quality'))) pros.push('Reviewers highlight the high quality and craftsmanship.');
                        else if (['beautiful', 'amazing', 'love'].includes(word) && !pros.some(p => p.includes('aesthetic'))) pros.push('Customers love the overall aesthetic and design.');
                        found = true;
                        break;
                      }
                    }
                    if (!found) {
                        if (review.comment.length > 20 && !pros.some(p => p.includes('Generally'))) pros.push('Generally receives very positive feedback.');
                    }
                  }
                } else if (sentiment === 'con') {
                  if (cons.length < 2) {
                    for (const word of keywords.cons) {
                      if (review.comment.toLowerCase().includes(word)) {
                         if (['small', 'bit tight'].includes(word) && !cons.some(c => c.includes('sizing'))) cons.push('Some users mention sizing can be a bit small.');
                         else if (word === 'different color' && !cons.some(c => c.includes('color'))) cons.push('Color may vary slightly from photos.');
                         else if (word === 'stiff' && !cons.some(c => c.includes('stiff'))) cons.push('May require a short break-in period.');
                         break;
                      }
                    }
                  }
                }
              });
              
              if (pros.length === 0) pros.push('Overall, customers are very satisfied with their purchase.');
              
              resolve({ pros, cons });
          }, 1200);
      });
  };

  return await apiFetch(operation);
};
