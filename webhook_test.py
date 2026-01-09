#!/usr/bin/env python3
"""
Webhook 测试脚本

此脚本用于验证 Webhook 功能是否正常工作。
可以接收到 GitHub Webhook 事件并打印相关信息。
"""

import json
import sys
from datetime import datetime
from typing import Any, Dict


def print_webhook_info(event_type: str, payload: Dict[str, Any]) -> None:
    """
    打印 Webhook 事件信息

    Args:
        event_type: Webhook 事件类型
        payload: 事件负载数据
    """
    print(f"\n{'='*60}")
    print(f"收到 Webhook 事件: {event_type}")
    print(f"时间: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print(f"{'='*60}")

    # 打印关键信息
    if 'repository' in payload:
        repo = payload['repository']
        print(f"仓库: {repo.get('full_name', 'Unknown')}")

    if 'sender' in payload:
        sender = payload['sender']
        print(f"触发者: {sender.get('login', 'Unknown')}")

    if 'action' in payload:
        print(f"操作: {payload['action']}")

    print(f"\n完整负载:")
    print(json.dumps(payload, indent=2, ensure_ascii=False))


def main() -> int:
    """
    主函数 - 模拟 Webhook 处理

    Returns:
        int: 退出代码
    """
    # 创建一个模拟的 Webhook payload
    mock_payload = {
        "action": "opened",
        "issue": {
            "id": 1,
            "number": 1,
            "title": "测试 AI 开发",
            "body": "这是一个测试 Issue，用于验证 Webhook 功能",
            "state": "open",
            "created_at": datetime.now().isoformat(),
        },
        "repository": {
            "id": 123456789,
            "name": "kaka_test",
            "full_name": "wersling/kaka_test",
            "private": False,
        },
        "sender": {
            "login": "ai-developer",
            "type": "User",
        },
    }

    # 打印 Webhook 信息
    print_webhook_info("issues", mock_payload)

    print(f"\n✅ Webhook 处理成功！")
    return 0


if __name__ == "__main__":
    sys.exit(main())
