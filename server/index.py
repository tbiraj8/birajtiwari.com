import json
from datetime import datetime

def handler(event, context):
    try:
        # Parse request body
        body = json.loads(event['body'])
        
        # Add your business logic here
        result = {
            "message": "Success",
            "data": body,
            "timestamp": datetime.now().isoformat()
        }
        
        # Return successful response
        return {
            "statusCode": 200,
            "headers": {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            "body": json.dumps(result)
        }
        
    except Exception as e:
        print(f'Error: {str(e)}')
        
        # Return error response
        return {
            "statusCode": 500,
            "headers": {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            "body": json.dumps({
                "message": "Internal server error",
                "error": str(e)
            })
        }