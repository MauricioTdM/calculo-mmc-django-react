import json
import math
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def calculate_lcm(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            first_number = data.get('first_number')
            last_number = data.get('last_number')

            if not isinstance(first_number, int) or not isinstance(last_number, int):
                return JsonResponse({"error": "Os valores devem ser números inteiros."}, status=400)
            
            if first_number <= 0 or last_number <= 0:
                return JsonResponse({"error": "Ambos os números devem ser positivos e maiores que zero."}, status=400)
                
            if first_number >= last_number:
                return JsonResponse({"error": "O primeiro número deve ser menor que o último número."}, status=400)
            
            lcm = first_number
            
            for i in range(first_number + 1, last_number + 1):
                lcm = (lcm * i) // math.gcd(lcm, i)

            return JsonResponse({
                "first_number": first_number,
                "last_number": last_number,
                "resultado": lcm
            }, status=200)
        
        except json.JSONDecodeError:
            return JsonResponse({"error": "JSON mal formatado."}, status=400)
        
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)
        
    return JsonResponse({"error": "Método não permitido. Utilize POST."}, status=405)
