
export async function apiReview(){
    
    const response = await fetch(`https://api.rainforestapi.com/request?api_key=demo&type=reviews&amazon_domain=amazon.com&asin=B073JYC4XM&review_stars=all_critical&sort_by=most_recent`, {
        method: 'GET',
      });
    if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();

};