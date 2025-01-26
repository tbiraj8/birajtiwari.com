import json
from datetime import datetime

def handler(event, context):
    try:
        body = json.loads(event['body'])
        result = {
            "message": "Success",
            "data": body,
            "timestamp": datetime.now().isoformat()
        }
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