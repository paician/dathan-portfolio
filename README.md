# Dathan Li｜企業流程整合／自動化平台工程師

這是我的個人履歷網站原始碼，用於呈現企業流程自動化、跨系統 API 整合、IAM / Access Control、AI Workflow 與平台治理相關作品。

網站重點不是單純列出工具，而是呈現我如何將分散、人工、不可追蹤的企業流程，重構為可執行、可稽核、可維運的平台型 workflow。

## Website

- Portfolio: https://dathan.is-a.dev/
- GitHub: https://github.com/paician
- LinkedIn: https://www.linkedin.com/in/dathan-li-97b615300/

## 最新專案進度

### Data Insight Agent：企業 AI 任務控制平台 Demo

Demo 影片：
https://www.youtube.com/watch?v=gvveKfxgcM8

此專案展示一個 Enterprise AI Workflow / Task Control Plane 的 MVP。

一般 chatbot 是「自然語言輸入 → AI 回答」，但企業流程不能讓 AI 在理解需求後直接操作資料庫、API 或內部系統。因此這個 Demo 將自然語言需求轉換成可追蹤的 governed task，並透過以下流程控管：

```text
Natural Language
→ Governed Task
→ UI-level Policy Preview
→ Backend Routing
→ Human Approval Gate
→ Allowlisted Executor
→ Deterministic Result
→ Audit Events
```

目前完成內容：

- Demo Account / Role 模擬
- Scenario presets：Allowed / Blocked / Unsupported / Borderline
- UI-level Policy Preview
- Backend Routing 作為 task 建立後的權威來源
- Intent routing：`data_insight_query`
- Executor routing：`data_insight_executor`
- Human-in-the-loop Approval Gate
- Safe demo executor
- Deterministic result
- Audit events timeline
- Recording mode
- Sanitized advanced JSON
- Test matrix / manual validation / recording guide

目前版本仍是 MVP。Policy Preview 屬於 UI-level demo，後續規劃會把 identity / role policy、unsafe hard deny 與 server-side enforcement 補到後端。

## Selected Projects

### 1. 企業級動態身分與存取管理系統（IAM Portal）

以 Lark Base 作為 Policy Engine 與資料層，Anycross 作為 BaaS / API Gateway，建立可配置、可治理的動態權限管理系統。支援 RBAC / ABAC-style 權限矩陣、Row-Level Security、Column-Level Security、審批同步與稽核軌跡。

### 2. Lark / Anycross 企業流程整合系統

整合 Lark、Base、Anycross、Outlook、Freshservice 等系統 API，將 Email、人工通知與手動追蹤的流程重構為可觸發、可追蹤、可維運的 workflow。

### 3. Data Insight Agent：企業 AI 任務控制平台 Demo

以自然語言作為企業流程入口，展示 task lifecycle、policy preview、backend routing、approval gate、executor boundary 與 audit events。

### 4. 企業私有 AI Workflow 基礎架構

聚焦企業私有化部署、資料流向管控與安全邊界設計，將 AI 作為流程中的輔助判斷層，而非單純 chatbot 展示。

### 5. Software Installer 套裝提權安裝介面

針對無管理員權限的終端使用者設計的安裝請求輔助工具，透過受控的提權機制降低重複性 IT 支援負擔。

## 技術範疇

- Workflow Architecture
- API Integration
- Event-driven Design
- IAM / Access Control
- RBAC / ABAC
- Audit Trail
- Python
- FastAPI
- Streamlit
- PowerShell
- JavaScript
- Lark / Base / Anycross
- Windows Server / Active Directory

## 本次更新

- 新增 Data Insight Agent Demo 專案進度
- 新增 YouTube Demo 影片連結
- 更新 Selected Projects 專案順序
- README 從 Lovable 預設內容改為履歷網站說明
